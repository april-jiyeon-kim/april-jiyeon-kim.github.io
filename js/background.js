const body = document.querySelector('body');
const images = [
    "https://i.imgur.com/0bPsbYw.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAxNzExMDZfOSAg/MDAxNTA5OTQyOTQyNjg0.zE3QLh2IMPbaoYOcGW5HcsvOgtkEpzoLMzB7O5uvXJog.mTTdSr67Wj52X9PiXrjDHaA5bCknbYUJahHHVaJEBT8g.JPEG.heeyoung9302/American-Shorthair-kitten-cute-paws-2560x1600.jpg?type=w800",
    "https://cdn.theatlantic.com/thumbor/VKFwp1ZU9UWVK5OD-AymUQwKNxI=/0x699:6720x4479/1600x900/media/img/mt/2021/05/GettyImages_1218380632/original.jpg",
    "https://images.squarespace-cdn.com/content/v1/5c3d0a98506fbe24fe972977/1618257306997-DFKUSRZ0MYFB2TKLB3LH/unsplash-image-w12NAMymqnk.jpg?format=2500w",
];

function changeBackground() {
    const img = document.createElement('img');
    let num = Math.floor(Math.random() * images.length);
    img.src = images[num]
    img.alt = 'background image'
    img.classList.add('bgImg')

    body.prepend(img);
}

changeBackground()