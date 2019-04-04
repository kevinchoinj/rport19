export const projectData = {
  kaitlyn: {
    bannerTextOne: 'Kaitlyn',
    bannerTextTwo: '2019',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: '',
    aboutText: 'Kaitlyn is a Twitch.tv streamer',
    video: '/static/images/kaitlyn/video.mp4',
    bodyImageOne: '/static/images/kaitlyn/1.png',
    bodyImageTwo: '/static/images/kaitlyn/2.png',
    bodyImageThree: '/static/images/kaitlyn/3.png',
    mobileImageOne: '/static/images/kaitlyn/4.png',
    mobileImageTwo: '/static/images/kaitlyn/5.png',
    mobileImageThree: '/static/images/kaitlyn/6.png',
  },
  novaruu: {
    bannerTextOne: 'Novaruu',
    bannerTextTwo: '2019',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://novaruu.com',
    aboutText: 'Novaruu is a Twitch.tv streamer',
    video: '/static/images/novaruu/video.mp4',
    bodyImageOne: '/static/images/novaruu/1.png',
    bodyImageTwo: '/static/images/novaruu/2.png',
    bodyImageThree: '/static/images/novaruu/3.png',
    mobileImageOne: '/static/images/novaruu/4.png',
    mobileImageTwo: '/static/images/novaruu/5.png',
    mobileImageThree: '/static/images/novaruu/6.png',
  },
  delilah: {
    bannerTextOne: 'Delilah\'s 2nd Chance',
    bannerTextTwo: '2018',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'https://delilahs2ndchance.org',
    aboutText: 'This project was created for a non-profit animal rescue.',
    bodyImageOne: '/static/images/delilahs/1.png',
    bodyImageTwo: '/static/images/delilahs/2.png',
    bodyImageThree: '/static/images/delilahs/3.png',
    mobileImageOne: '/static/images/delilahs/4.png',
    mobileImageTwo: '/static/images/delilahs/5.png',
    mobileImageThree: '/static/images/delilahs/6.png',
  },
  discord: {
    bannerTextOne: 'Discord Bot',
    bannerTextTwo: '2017/2019',
    bannerTextThree: 'Javascript Node.JS',
    bannerTextFour: 'https://github.com/kevinchoinj/discord-clean',
    aboutText: 'An automated chat bot was created on Discord. Discord is a freeware VoIP application designed for gamers and features text and voice channels.',
    bodyTextOne: 'The bot utilizes cron to periodically poll Twitter, Twitch, and Instagram APIs to store data in CouchDB.',
    bodyTextTwo: 'When a new unique post to a social media is added, or whenever a twitch stream is started, the bot automatically posts the received content into a set channel. Administrators and Moderators can choose which channel each type of message is sent to. In the case of Twitch live streams, the live stream post is periodically edited to reflect the duration of the stream as well as an updated thumbnail.',
    bodyTextThree: 'Users can also invoke bot functionality and command the bot to post the latest social media data in a channel, and can also invoke data from other sites such as Last.FM and Imgur.',
    bodyImageOne: '/static/images/discord/1.jpg',
    bodyImageTwo: '/static/images/discord/2.jpg',
    bodyImageThree: '/static/images/discord/3.jpg',
  },
  uwloo: {
    bannerTextOne: 'University of Waterloo',
    bannerTextTwo: '2017',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'http://www.eng.uwaterloo.ca/~jejmcclu/',
    aboutText: 'The department of Mechanical and Mechatronics Engineering Thermo-Fluids Fall Meeting brings together research groups working in thermo-fluids to give the opportunity for students to elevate the profile of their research, broaden their perspective in the field of thermo-fluids and generate discussion and interaction between research groups.',
    bodyTextOne: 'This site was built for the University of Waterloo\'s Department of Mechanical & Mechantronics Engineering.',
    bodyTextTwo: 'The site includes the current information and instructions for applicants, and shows past applications submitted in previous seminars.',
    bodyTextThree: 'The site was coded on Visual Studio Code with Javascript in the React Framework. A dark/light toggle was added,so users can change the design of the site to a white or a dark-gray themed site.',
    bodyImageOne: '/static/images/uwloo/1.jpg',
    bodyImageTwo: '/static/images/uwloo/2.jpg',
    bodyImageThree: '/static/images/uwloo/3.jpg',
    mobileImageOne: '/static/images/uwloo/5.jpg',
    mobileImageTwo: '/static/images/uwloo/6.jpg',
    mobileImageThree: '/static/images/uwloo/7.jpg',
  },
  drjart: {
    bannerTextOne: 'Dr. Jart+ Newsletter',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS',
    bannerTextFour: 'http://us.drjart.com/',
    aboutText: 'Dr. Jart+ produces scientific and reliable products that lead to healthy and beautiful skin across 4 continents in 15 countries.',
    bodyTextOne: 'The objective in this project for Dr. Jart+ was producing a newsletter format that would be accessible across multiple formats and devices.',
    bodyTextTwo: 'Different CSS was used to align the various elements in the page across platforms such as Yahoo! Mail and Gmail, and multiple devices such as tablets and phones in portrait and landscape orientations.',
    bodyTextThree: 'Atom, an open-source and free text editor was used as an IDE (integrated development environment) to follow templates which were provided as .psd files. HTML and CSS were used to complete the objective.',
    bodyImageOne: '/static/images/drjart/2.jpg',
    bodyImageTwo: '/static/images/drjart/1.png',
    bodyImageThree: '/static/images/drjart/3.jpg',
  },
  lastfm: {
    bannerTextOne: 'Last.fm API site',
    bannerTextTwo: '2017',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'https://lastfm.shodyra.com/',
    aboutText: 'This personal project uses the last.fm API to get the currently playing or most recently played song of any user live. When the song updates, there is a display of five similar songs, which users can click to display further similar songs. Users can then click those songs to get similar songs to those.',
    bodyTextOne: 'The site polls the Last.fm API on an interval to update the displayed track. If the user is listening to a new song, the displayed image will change without needing to refresh the page. If the image displayed changes, a function is called to find similar tracks to the currently playing track, and displays them on the side.',
    bodyTextTwo: 'Users can input any username into the input box to find the currently playing track. If the track\'s album art is unavailable, the image is not displayed. If similar tracks could not be found, the similar image slots are emptied. A debounce function was used to prevent calling the last.fm API at too high of a rate.',
    bodyTextThree: 'Clicking one of the similar-track images opens a panel which displays tracks that are similar to the clicked track. These tracks inside the panel are also clickable and will refresh the panel with similar tracks to the newly clicked track image.',
    bodyImageOne: '/static/images/lastfm/1.jpg',
    bodyImageTwo: '/static/images/lastfm/2.jpg',
    bodyImageThree: '/static/images/lastfm/3.jpg',
    mobileImageOne: '/static/images/lastfm/5.png',
    mobileImageTwo: '/static/images/lastfm/6.png',
    mobileImageThree: '/static/images/lastfm/7.png',
  },
  leida: {
    bannerTextOne: 'ideal leida',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS Javascript PHP',
    bannerTextFour: 'http://nynyer.com/project/idealleida',
    aboutText: 'Edward Leida was trained as both an Industrial and Graphic Designer. During the course of his career, he has done extensive work in the areas of Corporate Identity, Editorial Design, Book Design and Advertising. He served as the Design Director of W Magazine and during his tenure, Leida redesigned W in 1991 as well as designed and established the formats for Jane Magazine, Details Magazine and Women\'s Wear Daily.',
    bodyTextOne: 'The site was created using design .psd schematics. The background was built as a full screen carousel aside from the side menu, which controls 3 layers of slide-in panels.	The topmost panel is a \'Hello\' panel which works as a description page for Edward Leida. The bottom panel shows a collection of thumbnails which each link to a slide-in of a third middle panel which contains a carousel and description. Clicking on various panels causes other panels to interact with the click, and clicking on side menu items displays different thumbnails.',
    bodyTextTwo: 'The thumbnails can be shown as a thumbnail view or a list view, and the thumbnails can be sorted by project title, category, or date. The Kirby user interface was implemented such that a user could easily add new projects which correspond to the various selections in the side menu. In addition to adding the title and description of each project, the user can add a thumbnail image and up to ten carousel images. All parts of the site were designed to be responsive from desktop views, tablet views, and phone views.',
    bodyTextThree: 'The Kirby file-based content management system (CMS) was integrated into the website for a intuitive user experience. HTML, CSS, Javascript, and PHP were used in Atom, an open-source and free text editor was used as an IDE (integrated development environment) to follow templates which were provided as .psd files. Bootstrap, a mobile first front-end framework was used in the creation of carousels. Carousels were each customized for use in both the main background and in each individual project. Javascript was used to check the number of slides that were input through the Kirby CMS and PHP to make each carousel function correctly between a range of 1 to 10 slides.',
    bodyImageOne: '/static/images/leida/1.jpg',
    bodyImageTwo: '/static/images/leida/2.jpg',
    bodyImageThree: '/static/images/leida/3.jpg',
    mobileImageOne: '/static/images/leida/5.jpg',
    mobileImageTwo: '/static/images/leida/6.jpg',
    mobileImageThree: '/static/images/leida/7.jpg',
  },
  library: {
    bannerTextOne: 'WNS Library',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS',
    bannerTextFour: 'http://wnslibrary.tumblr.com/',
    aboutText: 'WNS Library is a visual collection of Why Not Smile\'s books.',
    bodyTextOne: 'WNS Library was built on the tumblr platform using \'Otlet\'s Shelf\' plugin. The format was edited with CSS.',
    bodyTextTwo: 'The search bar was implemented to search through various tags which were added to each book.',
    bodyTextThree: 'HTML/CSS was used to edit features on the tumblr platform.',
    bodyImageOne: '/static/images/library/1.jpg',
    bodyImageTwo: '/static/images/library/2.jpg',
  },
  tcfs: {
    bannerTextOne: 'too cool for school',
    bannerTextTwo: '2016-2017',
    bannerTextThree: 'HTML CSS Javascript',
    bannerTextFour: 'http://toocoolforschool.us/',
    aboutText: 'Too Cool For School is an artistic cosmetic brand focused on creative experimentation and contemporary culture. Too Cool For School was created in New York City. The artwork for the first artist-collaborative packaging was created simultaneously with a freelance illustrator in London.',
    bodyTextOne: 'Various additions were made to the site including the following: a responsive closeable overlay on page load, editing of submenus, editing of products and product descriptions, and a responsive customized carousel. The overlay was designed along specifications regarding the border spacing outside the overlay and the spacing between the edge of the overlay and the image/text as seen above in slides 4 and 5.',
    bodyTextTwo: 'Existing content in the submenu under \'Products\' was edited in both content and design. Content under the \'Inspirations\' was created with the same template as the Products submenu and the mobile version hamburger menu was edited such that the selection graphic moved upon submenu selection, and javascript was used to handle hiding and showing the submenu content in the mobile hamburger menu. The carousel as seen above in slide 2 was created with desktop and mobile specifications using bootstrap. The bootstrap carousel was then edited to meet design standards.',
    bodyTextThree: 'XAMPP, an open source web server solution was used for development testing for each portion of editing. Atom, an open-source and free text editor was used as an IDE (integrated development environment) to follow templates which were provided as .psd files. Bootstrap, a mobile first front-end framework was used in making the carousel.',
    bodyImageOne: '/static/images/tcfs/1.jpg',
    bodyImageTwo: '/static/images/tcfs/2.jpg',
    bodyImageThree: '/static/images/tcfs/3.jpg',
    mobileImageOne: '/static/images/tcfs/5.jpg',
    mobileImageTwo: '/static/images/tcfs/6.jpg',
    mobileImageThree: '/static/images/tcfs/7.jpg',
  },
  wildcat: {
    bannerTextOne: 'Ashley Wildcat',
    bannerTextTwo: '2016-2018',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'https://www.ashleywildcat.com/',
    aboutText: 'Ashley Wildcat is a session wrestler and model. She is a member of Ring Card Girls, Fitness Models international, and USWO Wrestling. She has worked with Ladies of Wrestling. Pro Wrestling Chicago, and ESport Fitness Batavia. She worked with Eternal Elegance and appeared in BeautyLook Magazine.',
    video: '/static/images/wildcat/video.mp4',
    bodyImageOne: '/static/images/wildcat/1.jpg',
    bodyImageTwo: '/static/images/wildcat/2.png',
    bodyImageThree: '/static/images/wildcat/3.png',
    mobileImageOne: '/static/images/wildcat/5.png',
    mobileImageTwo: '/static/images/wildcat/6.png',
    mobileImageThree: '/static/images/wildcat/7.png',
  },
  wns: {
    bannerTextOne: 'Why Not Smile',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS Javascript',
    bannerTextFour: 'http://whynotsmile.com/',
    aboutText: 'WNS (a.k.a. Why Not Smile) is a multidisciplinary creative consultancy based in New York City.',
    bodyTextOne: 'The first objective was to use the Supersized full screen background slideshow jquery plugin to edit the functionality of the main site including the scaling, transitions, and touch-screen swiping.	The second objective was creating the overlay box which was initially shown on page load, then later moved to the \'About WNS\' link.',
    bodyTextTwo: 'The overlay box was primarily created using HTMl, CSS, and Javascript. The header with links at the top portion is fixed with links that smooth scroll to various sections of the overlay box. The overlay box is responsive and extends to become full-screen when the width of the device is smaller, such as in the case of a mobile device. All contents within the overlay are also responsive and fit according to the screen width.',
    bodyTextThree: 'Notepad++, a free source code editor was used to make the changes to the main page of this site.',
    bodyImageOne: '/static/images/wns/1.jpg',
    bodyImageTwo: '/static/images/wns/2.jpg',
    bodyImageThree: '/static/images/wns/3.jpg',
    mobileImageOne: '/static/images/wns/5.jpg',
    mobileImageTwo: '/static/images/wns/6.jpg',
    mobileImageThree: '/static/images/wns/7.jpg',
  },
  harvard: {
    bannerTextOne: 'Harvard Wheelwright Prize',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS JQuery',
    bannerTextFour: 'http://wheelwrightprize.org/',
    aboutText: 'The Wheelwright Prize is a $100,000 travel-based research grant that is awarded annually to early-career architects who have demonstrated exceptional design talent, produced work of scholarly and professional merit, and who show promise for continued creative work.',
    bodyTextOne: 'The site was edited to fix deprecated Jquery functions. This was one of my first ever experiences with basic javascript.',
    bodyImageOne: '/static/images/harvard/image2.png',
  }
};
