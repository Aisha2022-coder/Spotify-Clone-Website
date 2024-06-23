console.log('Lets write JavaScript');

// Get all SVG elements with the class play-button
const svgs = document.querySelectorAll('svg.play-button');

const imageUrls = [
  'https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca',
  'https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3',
  'https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c',
  'https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16',
  'https://i.scdn.co/image/ab6761610000e5ebfb13d10be20fdcb5a670f551',
  'https://i.scdn.co/image/ab67616d0000b2731e63de6489803c2b39e7f8e5',
  'https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9',
  'https://i.scdn.co/image/ab67616d0000b2739bb2d30b01ac2cada8a8ad03',
  'https://i.scdn.co/image/ab67616d0000b2731d93bb16bf3025587d001f45',
  'https://i.scdn.co/image/ab67616d0000b2731d1cc2e40d533d7bcebf5dae',
  'https://seeded-session-images.scdn.co/v2/img/540/r/artist/4YRxDV8wJFPHPTeXepOstw/en',
  'https://seeded-session-images.scdn.co/v2/img/540/r/artist/1mYsTxnqsietFxj1OgoGbG/en-GB',
  'https://seeded-session-images.scdn.co/v2/img/540/r/artist/2FKWNmZWDBZR4dE5KX4plR/en',
  'https://seeded-session-images.scdn.co/v2/img/540/r/artist/2oBG74gAocPMFv6Ij9ykdo/en-GB',
  'https://seeded-session-images.scdn.co/v2/img/540/r/artist/4K6blSRoklNdpw4mzLxwfn/en',
  'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
  'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg',
  'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg',
  'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg',
  'https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg',
  'https://i.scdn.co/image/ab67706f00000002204335eb7d241ef0dbf5c5ad',
  'https://i.scdn.co/image/ab67706f00000002fd4af4581daf8d52558ab410',
  'https://i.scdn.co/image/ab67706f0000000242ede53dcaaa172b7bbca101',
  'https://i.scdn.co/image/ab67706f000000028a9e50e6e634a604fa545f72',
  'https://i.scdn.co/image/ab67706f00000002472120b92edea982b5feb264',
  'https://i.scdn.co/image/ab6765630000ba8a9f5d8dab58a909ef23fee583',
  'https://i.scdn.co/image/ab6765630000ba8a099a357ed0a2a39424f2903d',
  'https://i.scdn.co/image/ab6765630000ba8a9d2abc777125c182cf99b60f',
  'https://i.scdn.co/image/ab6765630000ba8a977f6de2920c47bb781ed6e5',
  'https://i.scdn.co/image/ab6765630000ba8a36dbb0b2d65004488fcc322f'
  // add more image URLs as needed
];

// Loop through each SVG element
svgs.forEach((svg, index) => {
// Add an event listener to the SVG element
svg.addEventListener('click', function () {
  // Create the overlay, boxDiv, and its contents
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0, 0, 0, 0.9)';
  overlay.style.zIndex = '999'; // make sure it's on top of everything except the boxDiv

  // Create a new div element
  const boxDiv = document.createElement('div');
  boxDiv.style.width = '763px';
  boxDiv.style.height = '394px';
  boxDiv.style.background = '#342020';
  boxDiv.style.position = 'fixed';
  boxDiv.style.top = '54%';
  boxDiv.style.left = '50%';
  boxDiv.style.transform = 'translate(-50%, -50%)';
  boxDiv.style.display = 'flex';
  boxDiv.style.flexDirection = 'row';
  boxDiv.style.justifyContent = 'center';
  boxDiv.style.alignItems = 'center';
  boxDiv.style.color = 'white';
  boxDiv.style.padding = '20px';
  boxDiv.style.borderRadius = '7px';
  boxDiv.style.zIndex = '1000';

  // Create a new img element
  const img = document.createElement('img');
  img.src = imageUrls[index]; // use the corresponding image URL for each box div
  img.style.width = '287px';
  img.style.height = '293px';
  img.style.marginRight = '30px';
  img.style.marginLeft = '40px';

  // Create a new content div
  const contentDiv = document.createElement('div');
  contentDiv.style.flex = '1';
  contentDiv.style.display = 'flex';
  contentDiv.style.flexDirection = 'column';
  contentDiv.style.justifyContent = 'flex-start';
  contentDiv.style.alignItems = 'flex-end';

  // Create a new h2 element
  const h2 = document.createElement('h2');
  h2.textContent = 'Start listening with a free Spotify account';
  h2.style.position = 'absolute';
  h2.style.top = '85px';
  h2.style.left = '725px';
  h2.style.transform = 'translateX(-100%)';
  h2.style.fontFamily = 'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic", sans-serif';
  h2.style.fontWeight = '700';
  h2.style.color = 'rgb(255, 255, 255)';
  h2.style.fontSize = '32px';
  h2.style.display = 'flex';
  h2.style.justifyContent = 'center';
  h2.style.width = '318px';

  // Create a new button element
  const button = document.createElement('button');
  button.style.fontFamily = 'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic"';
  button.style.fontWeight = '600';
  button.style.background = '#1ed760';
  button.style.color = 'rgb(0,0,0)';
  button.style.fontSize = '16px';
  button.style.left = '481px';
  button.style.bottom = '200px';
  button.style.border = 'none';
  button.style.borderRadius = '40px';
  button.style.padding = '16px 27px';
  button.style.position = 'fixed';
  button.style.cursor = 'pointer';

  // Add a margin top to the button to create a gap between the h2 and button
  button.style.marginTop = '10px';

  // Create an anchor tag for the button
  const buttonAnchor = document.createElement('a');
  buttonAnchor.href = 'https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F%23login'; // add the link URL here
  buttonAnchor.textContent = 'Sign up free';
  buttonAnchor.style.textDecoration = 'none';
  buttonAnchor.style.color = 'rgb(0,0,0)';

  // Append the anchor tag to the button
  button.appendChild(buttonAnchor);

  // Create a new button element for Download app
  const downloadButton = document.createElement('button');
  downloadButton.style.background = 'transparent';
  downloadButton.style.color = 'white';
  downloadButton.style.fontSize = '16px';
  downloadButton.style.right = '158px';
  downloadButton.style.bottom = '125px';
  downloadButton.style.border = '1px solid white';
  downloadButton.style.borderRadius = '40px';
  downloadButton.style.padding = '16px 40px'; // increase the padding to make it wider than the Sign up free button
  downloadButton.style.cursor = 'pointer';
  downloadButton.style.position = 'fixed';

  // Create an anchor tag for the download button
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = 'https://www.spotify.com/in-en/download/windows/?referrer=dwp'; // add the link URL here
  downloadAnchor.textContent = 'Download app';
  downloadAnchor.style.textDecoration = 'none';
  downloadAnchor.style.color = 'white';

  // Append the anchor tag to the download button
  downloadButton.appendChild(downloadAnchor);

  // Create a new span element for Already have an account?
  const alreadyHaveAccountSpan = document.createElement('span');
  alreadyHaveAccountSpan.textContent = 'Already have an account?';
  alreadyHaveAccountSpan.style.fontFamily = 'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic"';
  alreadyHaveAccountSpan.style.fontWeight = '400';
  alreadyHaveAccountSpan.style.color = 'rgba(255, 255, 255, 0.7)';
  alreadyHaveAccountSpan.style.fontSize = '14px';
  alreadyHaveAccountSpan.style.position = 'fixed';
  alreadyHaveAccountSpan.style.bottom = '78px';
  alreadyHaveAccountSpan.style.right = '196px';

  // Create an anchor tag
  const anchorTag = document.createElement('a');
  anchorTag.textContent = 'Log in';
  anchorTag.href = 'https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F%23login'; // add the link URL here
  anchorTag.style.textDecoration = 'none';
  anchorTag.style.color = 'rgb(255, 255, 255)';
  anchorTag.style.fontFamily = 'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic"';
  anchorTag.style.fontWeight = '600';
  anchorTag.style.fontSize = '14px';
  anchorTag.style.position = 'fixed';
  anchorTag.style.bottom = '78px';
  anchorTag.style.right = '147px';

  // Create a new button element for Close
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.background = 'transparent';
  closeButton.style.color = 'white';
  closeButton.style.fontSize = '24px';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';
  closeButton.style.right = '360px';
  closeButton.style.bottom = '-483px';
  closeButton.style.fontFamily = 'CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, "Helvetica Neue", helvetica, arial, "Hiragino Kaku Gothic ProN", Meiryo, "MS Gothic"';
  closeButton.style.fontWeight = '700';
  closeButton.style.color = 'rgb(167, 167, 167)';
  closeButton.style.fontSize = '16px';

  document.body.appendChild(overlay);

  // Append the h2 and button to the content div
  contentDiv.appendChild(h2);
  contentDiv.appendChild(button);
  contentDiv.appendChild(downloadButton);
  contentDiv.appendChild(alreadyHaveAccountSpan);
  contentDiv.appendChild(anchorTag);

  // Append the img and content div to the box div
  boxDiv.appendChild(img);
  boxDiv.appendChild(contentDiv);

  // Append the close button to the box div
  boxDiv.appendChild(closeButton);

  // Add the boxDiv to the body
  document.body.appendChild(boxDiv);

  // Add event listener to the close button
  closeButton.addEventListener('click', function () {
    boxDiv.remove(); // remove the boxDiv from the DOM
    // or
    boxDiv.style.display = 'none'; // hide the boxDiv when the close button is clicked
  });

  closeButton.addEventListener('click', function () {
    const overlay = document.querySelector('div[style*="position: fixed;"]');
    overlay.remove();
  });
});
});