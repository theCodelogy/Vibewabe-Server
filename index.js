const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./Routs/User");
const videoRouter = require("./Routs/Video/Video");
const musicRouter = require("./Routs/Music/Music");
const paymentRouter = require("./Routs/Payment");
const VideoCommentRouter = require("./Routs/Video/VideoComment");
const MusicCommentRouter = require("./Routs/Music/MusicComment");
const VideoPlaylistRouter = require("./Routs/Video/VideoPlaylist");
const MusicPlaylistRouter = require("./Routs/Music/MusicPlaylist");
const VideoSliderRouter = require("./Routs/Video/VideoSlider");
const VideoUserHistoryRouter = require("./Routs/Video/VideoUserHistory");
const orderRouter = require("./Routs/Order");
const MusicUserHistoryRouter = require("./Routs/Music/MusicUserHistory");
const notificationRouter = require("./Routs/Notification/Notification");
const ChannelRouter = require("./Routs/Channel/Channel");

// middleware
app.use(cors())
app.use(express.json());


async function run() {
  try {
    app.use("/user", userRouter);
    app.use("/video", videoRouter);
    app.use("/music", musicRouter);
    app.use("/payment", paymentRouter);
    app.use("/videoComment", VideoCommentRouter);
    app.use("/musicComment", MusicCommentRouter);
    app.use("/videoPlaylist", VideoPlaylistRouter);
    app.use("/musicPlaylist", MusicPlaylistRouter);
    app.use("/videoSlider", VideoSliderRouter);
    app.use("/videoHistory", VideoUserHistoryRouter);
    app.use("/musicHistory", MusicUserHistoryRouter);
    app.use("/order", orderRouter);
    app.use("/notification", notificationRouter);
    app.use("/channel", ChannelRouter);

    // Send a ping to confirm a successful connection
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});


app.use((err,req,res,next)=>{
  if(err.message){
    res.status(500).send(err.message)
  }else{
    res.status(500).send('There was an error!')
  }
})


app.listen(port, () => {
  console.log(`the server is running on the port of ${port} `);
});
