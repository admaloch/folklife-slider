const testScreenSize = () => {
  let size = 250
  if (window.innerWidth > 2250) {
    size = 300
  } else {
    size = 250
  }
  return size
}

var version = 10;

// var imageSize = 75 + (version * 12) - 24;
// $('#image img').width(imageSize);

function makeQR(value) {
  qrcode.qrcode.stringToBytes = qrcode.qrcode.stringToBytesFuncs['UTF-8']
  var qr = qrcode.qrcode(version, 'H');
  qr.addData(value);
  try {
    qr.make();
  } catch (err) {
    console.log('Version is low:', version)
    console.log('Error:', err)
  }
  document.getElementById('qr').innerHTML = qr.createImgTag(3);
}

function makeQArt(value, imagePath) {
  const qrSize = testScreenSize()
  new QArt({
    value: value,
    imagePath: imagePath,
    filter: 'color',
    version: version,
    size: qrSize,
    fillType: 'fill'
  }).make(document.getElementById('combine'));
}

// function runs on carousel slide change to update qr code to new image
$('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
  let currItem = ev.relatedTarget
  let id = currItem.id;
  let qrValue = `https://www.floridamemory.com/items/show/${id}`
  let qrImagePath = currItem.children[1].src;
  let mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = qrValue
  setTimeout(() => {
    makeQR(qrValue);
    makeQArt(qrValue, qrImagePath)
  }, 1000);
});

// set qr code on page load for initial image
const carouselItem = document.querySelector('.active')
const id = carouselItem.id
let qrValue = `https://www.floridamemory.com/items/show/${id}`
const qrImagePath = carouselItem.children[1].src
makeQR(qrValue);
makeQArt(qrValue, qrImagePath);




