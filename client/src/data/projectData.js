/*eslint-disable */
export const projectData = {
  fasffy: {
    extended: true,
    bannerTextOne: 'Fasffy',
    bannerTextTwo: '2020',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://fasffy.com/',
    aboutText: 'Fasffy is a Twitch.tv streamer, cosplayer, and eSports manager. As of 2020, she manages the Team Liquid League of Legends division, which has won four consecutive North American championships in 2018 and 2019.',
    video: '/static/images/fasffy/video.mp4',
    bodyTextOne: `The site was based on the foundation of the previously created Novaruu site, which I had previously built. The frontend was written with ReactJS, and libraries which were used were styled-components for styling, redux for state management, ramda for utility, formik for forms in the administrative ui, and js-cookie for session persistence after after authentication. In order to create a smooth and fluid user experience, a timer was set between each page transition such that before the subsequent panel would open, the previous panel would close. Users could also personalize their experience by selecting which side they wanted their view panels to appear from, and the width of each.
    <br/><br/>
    Social media display content is fetched from the backend, and other data such as the 'About' section and the 'Equipment' section are customized from the administrative panel, which is custom built for the user to easily submit data to a database. Data is submitted via forms constructed with Formik, where the user can upload both images and text. The administrative panel is only accessible with valid authentication. User mouse movements are tracked and used to animate background assets and to display relevant tooltips.`,
    bodyTextTwo: `Social media data is gathered via cron jobs to various APIs including Youtube, Twitter, Twitch, and Instagram. To retrieve Youtube video data without hitting the quota limit, the playlist ID for the specified channel must first be found and saved.
    For Instagram, a GraphQL endpoint is used, and for Twitch, separate requests are made to determine whether the channel is currently live,
    and another to get the collection of recent broadcasts.<br/><br/>
    While previously CouchDB/AWS S3 was used to store persistent data such as images and text data, for the scale of the project and only one user needing to be able to create, edit, and save data at a time, content was saved locally via fs into image folders and JSON files.
    An additional option was set such that the client could connect to the server with Socket.IO to update the data live as data from the server was updated. However, after some usage, the tradeoff of performance, albeit small, for this minor feature was not deemed worth it, so it was put on hold with the option of turning it back on at any time.
    <br/><br/>
    The React client and Express server are both hosted with NGINX on a Vultr VPS.
    `,
    bodyTextThree: `Fonts used for this app are Komika and Open Sans. Colors primarily used <span style="color: #643c7e">⬤</span> #643c7e,
    <span style="color: #f9f5fb">⬤</span> #f9f5fb, <span style="color: #ff7177">⬤</span> #ff7177, and <span style="color: #e8d6ef">⬤</span> #e8d6ef.
    <br/><br/>
    Lessons learned while building this application were the importance of not setting styled-components values within components, not setting
    constantly changing props in a styled-components component, using 100% height over 100vh due to mobile toolbars, and rendering behavior across
    route changes while using Google Analytics.
    <br/><br/>
    Aspects I am not quite satisfied with generally involve the experimental design,
    such as the limitation of navbar options on the left side especially on smaller viewports,
    the smallness of the default panel width, and general ambiguity of whether
    navigation leads to an external or internal page.
    <br/><br/>
    Aspects I am satisfied with are the seamless transitions between the desktop and mobile view, the various view options that the user can toggle on and off,
    and the general design of the content within each panel. The customer was also very satisfied with the completed result.
    `,
    bodyImageOne: '/static/images/fasffy/1.jpg',
    bodyImageTwo: '/static/images/fasffy/2.jpg',
    bodyImageThree: '/static/images/fasffy/3.jpg',
    bodyImageFour: '/static/images/fasffy/7.jpg',
    mobileImageOne: '/static/images/fasffy/4.jpg',
    mobileImageTwo: '/static/images/fasffy/5.jpg',
    mobileImageThree: '/static/images/fasffy/6.jpg',
    addImageOne: '/static/images/fasffy/f1.jpg',
    addImageOneSize: '600px',
  },
  kaitlyn: {
    extended: true,
    bannerTextOne: 'Kaitlyn',
    bannerTextTwo: '2019',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://kaitlynlive.com/',
    aboutText: 'Kaitlyn is a Twitch.tv streamer and eSports competitor',
    bodyTextOne: `The client was built with React using various libraries including classnames for styling, redux for state management, and ramda for utility. Various pages were created such as the landing page, a biographical page, an equipment page, an FAQ page, a contact page,
    and a stream page.
    <br/><br/>
    Social media display content is fetched from the backend, and other data such as the 'About' section and the 'Equipment' section are customized from the administrative panel, which is custom built for the user to easily submit data to a database. Data is submitted via forms constructed with Formik, where the user can upload both images and text. The administrative panel is only accessible with valid authentication.`,
    bodyTextTwo: `Social media data is gathered via cron jobs to various APIs including Youtube, Twitter, Twitch, and Instagram. To retrieve Youtube video data without hitting the quota limit, the playlist ID for the specified channel must first be found and saved.
    For Instagram, a GraphQL endpoint is used, and for Twitch, separate requests are made to determine whether the channel is currently live,
    and another to get the collection of recent broadcasts.<br/><br/>
    AWS S3 is used to store save and display image files, and CouchDB is used to save and display text content. Additionally, the client retrieves updated data periodically from the server via Socket.IO.
    <br/><br/>
    The React client and Express server are both hosted with NGINX on a Vultr VPS. The administrative panel, which is used to save data for the client to display, is set up as a separate application as well.
    `,
    bodyTextThree: `Fonts used for this app are Komika and Open Sans. Colors primarily used <span style="color: #28e5ca">⬤</span> #28e5ca and
    <span style="color: #b967ff">⬤</span> #b967ff.
    `,
    video: '/static/images/kaitlyn/video.mp4',
    bodyImageOne: '/static/images/kaitlyn/1.jpg',
    bodyImageTwo: '/static/images/kaitlyn/2.jpg',
    bodyImageThree: '/static/images/kaitlyn/3.jpg',
    mobileImageOne: '/static/images/kaitlyn/4.jpg',
    mobileImageTwo: '/static/images/kaitlyn/5.jpg',
    mobileImageThree: '/static/images/kaitlyn/6.jpg',
  },
  novaruu: {
    extended: true,
    bannerTextOne: 'Novaruu',
    bannerTextTwo: '2019',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://novaruu.com',
    aboutText: 'Novaruu is a partnered Twitch.tv streamer and Discord partner',
    bodyTextOne: `The frontend was written with ReactJS, and libraries which were used were styled-components for styling and
    redux for state management. While the Fasffy project contained an administrative ui for editing content, all content in the Novaruu
    app is automatically generated from the various social media APIs.
    <br/><br/>
    In order to create a smooth and fluid user experience, a timer was set between each page transition such that before the subsequent panel would open, the previous panel would close. Users could also personalize their experience by selecting which side they wanted their view panels to appear from, and the width of each.
    <br/><br/>
    User mouse movements are tracked and used to animate background assets and to display relevant tooltips, and Google Analytics was added to track user traffic.`,
    bodyTextTwo: `Social media data is gathered via cron jobs to various APIs including Youtube, Twitter, Twitch, and Instagram. To retrieve Youtube video data without hitting the quota limit, the playlist ID for the specified channel must first be found and saved.
    For Instagram, a GraphQL endpoint is used, and for Twitch, separate requests are made to determine whether the channel is currently live,
    and another to get the collection of recent broadcasts.<br/><br/>
    The React client and Express server are both hosted with NGINX on a Vultr VPS.
    `,
    bodyTextThree: `Fonts used for this app are Komika and Open Sans. Colors primarily used <span style="color: #f8d6f8">⬤</span> #f8d6f8,
    <span style="color: #c6fcf9">⬤</span> #c6fcf9, and <span style="color: #000000">⬤</span> #000000.
    <br/><br/>
    Aspects I am not quite satisfied with generally involve the experimental design,
    such as the limitation of navbar options on the left side especially on smaller viewports,
    the smallness of the default panel width, and general ambiguity of whether
    navigation leads to an external or internal page.
    <br/><br/>
    Aspects I am satisfied with are the seamless transitions between the desktop and mobile view, the various view options that the user can toggle on and off,
    and the general design of the content within each panel. The customer was also very satisfied with the completed result.
    <br/><br/>
    web.dev measurements were aggressively used to optimize performance of the application.
    `,
    video: '/static/images/novaruu/video.mp4',
    bodyImageOne: '/static/images/novaruu/1.jpg',
    bodyImageTwo: '/static/images/novaruu/2.jpg',
    bodyImageThree: '/static/images/novaruu/3.jpg',
    mobileImageOne: '/static/images/novaruu/4.jpg',
    mobileImageTwo: '/static/images/novaruu/5.jpg',
    mobileImageThree: '/static/images/novaruu/6.jpg',
    addImageOne: '/static/images/novaruu/f1.jpg',
  },
  delilah: {
    extended: true,
    bannerTextOne: 'Delilah\'s 2nd Chance',
    bannerTextTwo: '2018',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://delilahs2ndchance.org',
    video: '/static/images/delilahs/video.mp4',
    aboutText: `Delilah's 2nd Chance is a non-profit (501(c)(3)) animal rescue organization.They specialize in saving, rehabilitating, and placing in forever homes.`,
    bodyTextOne: `The frontend was written with ReactJS, and libraries which were used were styled-components for styling, redux-form for form creation, ramda for utility, and redux for state management. A collection of various necessary forms were created for Delilah's 2nd Chance including application forms, contracts, volunteer forms, agreements, and a contact form.
    <br/><br/>
    Additional requested pages were also made for donations, testimonials, and partners as well as a page to display all currently adoptable pets. When the user selects a currently adoptable pet, all of the pet's available data is displayed in the UI including images, details, and contact information.`,
    bodyTextTwo: 'The external backend application polls the petfinder.com API, then stores the data in CouchDB. The CouchDB data is then accessed by the client. All forms in the application are POSTed to the Node.js/Express server, which then uses nodemailer and gmail as an SMTP to forward all messages, applications, and contracts to multiple administrators and managers.',
    bodyTextThree: `Colors primarily used <span style="color: #fdd1de">⬤</span> #fdd1de,
    <span style="color: #f7c9d5">⬤</span> #f7c9d5, <span style="color: #f09db2">⬤</span> #f09db2, and <span style="color: #89cff0">⬤</span> #89cff0.
    <br/><br/>
    In 2019, approximately 2,000 adoption/fostering applications were submitted through the site.`,
    bodyImageOne: '/static/images/delilahs/1.jpg',
    bodyImageTwo: '/static/images/delilahs/2.jpg',
    bodyImageThree: '/static/images/delilahs/3.jpg',
    mobileImageOne: '/static/images/delilahs/4.jpg',
    mobileImageTwo: '/static/images/delilahs/5.jpg',
    mobileImageThree: '/static/images/delilahs/6.jpg',
    addImageOne: '/static/images/delilahs/f1.jpg',
    addImageOneSize: '600px',
  },
  discord: {
    bannerTextOne: 'Discord Bot',
    bannerTextTwo: '2017/2019',
    bannerTextThree: 'Javascript Node.js',
    bannerTextFour: 'https://github.com/kevinchoinj/discord-clean',
    aboutText: 'An automated chat bot was created on Discord. Discord is a freeware VoIP application designed for gamers and features text and voice channels. The bot polls multiple APIs including Twitch, Instagram, Twitter, and Youtube to check for updates, then posts these updates into specific Discord servers and channels. The bot is also able to archive various edited/deleted messages, and also logs its own errors as well as errors of other applications connected to the CouchDB database.',
    bodyTextOne: 'The bot utilizes cron to periodically poll Twitter, Twitch, and Instagram APIs to store data in CouchDB.',
    bodyTextTwo: 'When a new unique post to a social media is added, or whenever a twitch stream is started, the bot automatically posts the received content into a set channel. Administrators and Moderators can choose which channel each type of message is sent to. In the case of Twitch live streams, the live stream post is periodically edited to reflect the duration of the stream as well as an updated thumbnail.',
    bodyTextThree: 'Users can also invoke bot functionality and command the bot to post the latest social media data in a channel, and can also invoke data from other sites such as Last.FM and Imgur.',
    bodyImageOne: '/static/images/discord/1.jpg',
    bodyImageTwo: '/static/images/discord/2.jpg',
    bodyImageThree: '/static/images/discord/3.jpg',
    mobileImageOne: '/static/images/discord/4.jpg',
    mobileImageTwo: '/static/images/discord/5.jpg',
    mobileImageThree: '/static/images/discord/6.jpg',
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
    bannerTextOne: 'Dr. Jart+',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS',
    bannerTextFour: 'http://us.drjart.com/',
    aboutText: 'Dr. Jart+ produces scientific and reliable products that lead to healthy and beautiful skin across 4 continents in 15 countries.',
    bodyTextOne: 'The objective in this project for Dr. Jart+ was producing a newsletter format that would be accessible across multiple formats and devices.',
    bodyTextTwo: 'Different CSS was used to align the various elements in the page across platforms such as Yahoo! Mail and Gmail, and multiple devices such as tablets and phones in portrait and landscape orientations.',
    bodyTextThree: 'Atom, an open-source and free text editor was used as an IDE (integrated development environment) to follow templates which were provided as .psd files. HTML and CSS were used to complete the objective.',
    bodyImageOne: '/static/images/drjart/2.jpg',
    bodyImageTwo: '/static/images/drjart/1.jpg',
    bodyImageThree: '/static/images/drjart/3.jpg',
  },
  leida: {
    bannerTextOne: 'ideal leida',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS Javascript PHP',
    bannerTextFour: 'http://nynyer.com/project/idealleida',
    aboutText: 'Edward Leida was trained as both an Industrial and Graphic Designer. During the course of his career, he has done extensive work in the areas of Corporate Identity, Editorial Design, Book Design and Advertising. He served as the Design Director of W Magazine and during his tenure, Leida redesigned W in 1991 as well as designed and established the formats for Jane Magazine, Details Magazine and Women\'s Wear Daily.',
    bodyTextOne: 'The background was built as a full screen carousel aside from the side menu, which controls 3 layers of slide-in panels.	The topmost panel is a \'Hello\' panel which works as a description page for Edward Leida. The bottom panel shows a collection of thumbnails which each link to a slide-in of a third middle panel which contains a carousel and description. Clicking on various panels causes other panels to interact with the click, and clicking on side menu items displays different thumbnails.',
    bodyTextTwo: 'The thumbnails can be shown as a thumbnail view or a list view, and the thumbnails can be sorted by project title, category, or date. The Kirby user interface was implemented such that a user could easily add new projects which correspond to the various selections in the side menu. In addition to adding the title and description of each project, the user can add a thumbnail image and up to ten carousel images. All parts of the site were designed to be responsive from desktop views, tablet views, and phone views.',
    bodyTextThree: 'The Kirby file-based content management system (CMS) was integrated into the website for a intuitive user experience.',
    bodyImageOne: '/static/images/leida/1.jpg',
    bodyImageTwo: '/static/images/leida/2.jpg',
    bodyImageThree: '/static/images/leida/3.jpg',
    mobileImageOne: '/static/images/leida/5.jpg',
    mobileImageTwo: '/static/images/leida/6.jpg',
    mobileImageThree: '/static/images/leida/7.jpg',
  },
  tcfs: {
    bannerTextOne: 'too cool for school',
    bannerTextTwo: '2016-2017',
    bannerTextThree: 'HTML CSS Javascript',
    bannerTextFour: 'http://toocoolforschool.us/',
    aboutText: 'too cool for school is an artistic cosmetic brand focused on creative experimentation and contemporary culture. Too Cool For School was created in New York City. The artwork for the first artist-collaborative packaging was created simultaneously with a freelance illustrator in London.',
    bodyTextOne: 'Various additions were made to the site including the following: a responsive closeable overlay on page load, editing of submenus, editing of products and product descriptions, and a responsive customized carousel.',
    bodyTextTwo: 'Existing content in the submenu under \'Products\' was edited in both content and design. Content under the \'Inspirations\' was created with the same template as the Products submenu and the mobile version hamburger menu was edited such that the selection graphic moved upon submenu selection, and javascript was used to handle hiding and showing the submenu content in the mobile hamburger menu. The carousel as seen above in slide 2 was created with desktop and mobile specifications using bootstrap.',
    bodyImageOne: '/static/images/tcfs/1.jpg',
    bodyImageTwo: '/static/images/tcfs/2.jpg',
    bodyImageThree: '/static/images/tcfs/3.jpg',
    mobileImageOne: '/static/images/tcfs/5.jpg',
    mobileImageTwo: '/static/images/tcfs/6.jpg',
    mobileImageThree: '/static/images/tcfs/7.jpg',
  },
  wildcat: {
    extended: true,
    bannerTextOne: 'Ashley Wildcat',
    bannerTextTwo: '2016-2018',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'https://www.ashleywildcat.com/',
    aboutText: 'Ashley Wildcat is a session wrestler and model. She is a member of Ring Card Girls, Fitness Models international, and USWO Wrestling. She has worked with Ladies of Wrestling. Pro Wrestling Chicago, and ESport Fitness Batavia. She worked with Eternal Elegance and appeared in BeautyLook Magazine.',
    bodyTextOne: `The frontend was written with ReactJS, and libraries which were used were styled-components for styling and
    redux for state management. Initially, BEM CSS was used for styling, then classnames, then eventually styled-components was added to ease maintenance and editing of the application.
    An administrative panel was made to modify data involving partnered models and session wrestler.
    <br/><br/>
    Transitions between pages using panels were set up using route state management and transition timings.`,
    bodyTextTwo : `All forms in the application are POSTed to the Node.js/Express server, which then uses nodemailer and gmail as an SMTP to forward all messages, applications, and contracts to multiple administrators and managers.
    <br/><br/>
    A backend using Firebase was temporarily used for adding and editing data.
    <br/><br/>
    The React client and Express server are both hosted with NGINX on a Vultr VPS.`,
    bodyTextThree: `The primary theme color is <span style="color: #e8ba72">⬤</span>.
    <br/><br/>As Ashley's life focus has evolved, content on the site has been gradually modified over time to
    more accurately showcase her work.`,
    video: '/static/images/wildcat/video.mp4',
    bodyImageOne: '/static/images/wildcat/1.jpg',
    bodyImageTwo: '/static/images/wildcat/2.jpg',
    bodyImageThree: '/static/images/wildcat/3.jpg',
    mobileImageOne: '/static/images/wildcat/5.jpg',
    mobileImageTwo: '/static/images/wildcat/6.jpg',
    mobileImageThree: '/static/images/wildcat/7.jpg',
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
    video: '/static/images/harvard/video.mp4',
    bannerTextTwo: '2016',
    bannerTextThree: 'HTML CSS JQuery',
    bannerTextFour: 'http://wheelwrightprize.org/',
    bodyImageTwo: '/static/images/harvard/1.jpg',
    bodyImageThree: '/static/images/harvard/2.jpg',
    aboutText: 'The Wheelwright Prize is a $100,000 travel-based research grant that is awarded annually to early-career architects who have demonstrated exceptional design talent, produced work of scholarly and professional merit, and who show promise for continued creative work.',
    bodyTextOne: 'The site was edited to fix deprecated Jquery functions. This was one of my first ever experiences with basic javascript.',
    bodyImageOne: '/static/images/harvard/image2.png',
  },
  everydaycarry: {
    extended: true,
    bannerTextOne: 'EVERYDAY CARRY',
    video: '/static/images/everydaycarry/video.mp4',
    bannerTextTwo: '2019',
    bannerTextThree: 'Javascript React',
    bannerTextFour: 'https://harkdan.shodyra.com/',
    aboutText: 'Everyday Carry is an online store for everyday essentials. Everyday Carry is owned by entrepeneur and CEO, Daniel Saltman, who is the founder of various companies including Tinychat, Petitionspot, and Scour. Everyday Carry handles approximately 40,000 purchase clicks per day.',
    bodyTextOne: `A code generator was created as an external application to help web administration create and handle web posts that were otherwise not creatable by their existing online platform. All data set by the user is saved in LocalStorage to be easily accessed later, and the user can also export the entirety of the form content as a .txt file, then later import it back into the form.
    <br/><br/>
    Features included include a css-only navigation menu, a live-updating preview, and the option to add an abstract alongside the dynamically updating content.
    <br/><br/>
    Libraries used for this are formik for the form, styled-components for styling, and draft-js for a rich text editor mainly used for implementing links..
    `,
    bodyImageOne: '/static/images/everydaycarry/1.jpg',
    bodyImageTwo: '/static/images/everydaycarry/2.jpg',
    bodyImageThree: '/static/images/everydaycarry/3.jpg',
    mobileImageOne: '/static/images/everydaycarry/4.jpg',
    mobileImageTwo: '/static/images/everydaycarry/5.jpg',
    mobileImageThree: '/static/images/everydaycarry/6.jpg',
  },
  ce: {
    bannerTextOne: 'Cloud Elements',
    bannerTextTwo: '2019-current',
    bannerTextThree: 'Javascript Typescript',
    bannerTextFour: 'https://cloud-elements.com/',
    bodyImageOne: '/static/images/ce/1.jpg',
    bodyImageTwo: '/static/images/ce/2.jpg',
    bodyImageThree: '/static/images/ce/3.jpg',
    aboutText: 'Cloud Elements is the leading API integration platform for SaaS app providers and the digital enterprise.',
    bodyTextOne: 'New features were designed and implemented in the frontend application built to deliver customer value. Individual components were built with typescript then imported into the application via an internal component library . Sprint planning for scrum was done on JIRA, and unit testing and mocking were done primarily with cypress.io, enzyme, and jest. Libraries used to complete these tasks include redux, ramda, styled-components, and formik. ',
    bodyTextTwo: 'Custom branding was created and implemented for customers including SAP, SugarCRM, and Axway.',
    addImageOne: '/static/images/ce/sap.png',
    addImageOneSize: '600px',
  },
  loserfruit: {
    bannerTextOne: 'Loserfruit',
    video: '/static/images/loserfruit/video.mp4',
    bannerTextTwo: '2020',
    bannerTextThree: 'Javascript React Node.js',
    bannerTextFour: 'https://loserfruit.shodyra.com.com/',
    bodyImageOne: '/static/images/loserfruit/1.jpg',
    bodyImageTwo: '/static/images/loserfruit/2.jpg',
    bodyImageThree: '/static/images/loserfruit/3.jpg',
    aboutText: 'Kathleen, also known as Loserfruit or Lufu is one of the most-watched female gamers in the world. Building her online presence streaming League of Legends, Overwatch and then the popular battle royale Fortnite, her quirky personality and hilarious gameplay keeps her fans coming back for more.',
    mobileImageOne: '/static/images/loserfruit/4.jpg',
    mobileImageTwo: '/static/images/loserfruit/5.jpg',
    mobileImageThree: '/static/images/loserfruit/6.jpg',
  },
};
