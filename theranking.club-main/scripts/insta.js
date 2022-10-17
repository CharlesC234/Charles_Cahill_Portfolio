const Insta = require("scraper-instagram");
const InstaClient = new Insta();
var fs = require("fs"),
  http = require("http"),
  https = require("https");

var Stream = require("stream").Transform;
const path = require("path");
const person = require("../models/person");

InstaClient.authBySessionId(process.env.INSTAAUTH)
  .then((account) => console.log("Instagram Connected: " + account.username))
  .catch((err) => console.error(err));

var downloadImageFromURL = (url, filename, callback) => {
  var client = http;

  if (url.toString().indexOf("https") === 0) {
    client = https;
  }

  client
    .request(url, function (response) {
      var data = new Stream();

      response.on("data", function (chunk) {
        data.push(chunk);
      });

      response.on("end", function () {
        fs.writeFileSync(
          path.resolve(__dirname, "../images/" + filename),
          data.read()
        );
      });
    })
    .end();
};

async function downloadInstaPosts(person) {
  if (person.insta == null) {
    return;
  } else {
    await InstaClient.getProfile(person.insta)
      .then(async (profile) => {
        console.log(profile.name);
        console.log(profile.access);

        await downloadImageFromURL(
          profile.pic,
          person.fname + "_" + person.lname + ".jpg"
        );

        if (profile.access == false) {
          try {
            fs.appendFileSync("FollowTheseInstas.txt", person.insta + "\n");

            console.log("File is updated.");
          } catch (error) {
            console.log(error);
          }
        } else {
          var posts = profile.lastPosts;
          posts = posts.slice(0, 3);
          var pics = [];
          for (var i = 0; i < posts.length; i++) {
            await downloadImageFromURL(
              posts[i].thumbnail,
              posts[i].shortcode + ".jpg"
            );
            pics.push(posts[i].shortcode + ".jpg");
          }

          person.findById(person._id, function (err, person) {
            person.instaPhotos = pics;

            person.save(function (err) {
              if (err) {
                console.error("ERROR!");
                return;
              } else {
                return;
              }
            });
          });
        }
      })
      .catch((err) => console.error("insta: " + err));
  }
}

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function refresh() {
  console.log("Refreshing instagram photos");
  var persons = await person.find();
  persons.forEach((person) => {
    setTimeout(() => {
      downloadInstaPosts(person);
    }, between(500, 4000));
  });
}

setInterval(() => {
  refresh();
}, 86400000);

module.exports = { downloadInstaPosts, refresh };
