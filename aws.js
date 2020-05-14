// ==UserScript==
// @name         AWS Content Focus
// @namespace    http://aws.amazon.com/
// @version      0.1
// @description  remove extra content from AWS content
// @author       Brian Pfeil
// @match        https://aws.amazon.com/*
// @grant        none
// @updateURL   https://raw.githubusercontent.com/pfeilbr/browser-user-scripts/master/aws.js
// @downloadURL https://raw.githubusercontent.com/pfeilbr/browser-user-scripts/master/aws.js
// ==/UserScript==

(function () {
  "use strict";
  const focusPageContent = () => {
    // remove fat header content
    document.querySelector("#aws-page-header").remove();
    document.querySelector("body > div:nth-child(1)").remove();
    document
      .querySelector("#aws-page-content > div.aws-blog-related-posts")
      .remove();

    // shrink top margin
    document.querySelector("#aws-page-content").style.marginTop = "10px";

    // remove right sidebar content
    document.querySelector("#aws-page-content > div > div").remove();

    // increase content width to fill page more
    document.querySelector("#aws-page-content > div > main").style.width =
      "80%";
  };

  document.addEventListener(
    "keyup",
    (e) => {
      if (e.key === "f") {
        console.log(
          `user script: focusing page content.  triggered by pressing "${e.key}" key`
        );
        focusPageContent();
      }
    },
    false
  );
})();
