//requestをrequire
var request = require('request');

function echoBot(req, res) {
  // Example input: {"message": "Hello!"}
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('No message defined!');
  } else {
    // Everything is okay.

    // 環境に応じてurl, channel, botNameを設定
    var url = '';
    var channel = '';
    var botName = 'Bot';
    
    // messageを取得
    var text = req.body.message;

    //ヘッダーを定義
    var headers = {
      'Content-Type': 'application/json',
    };

    var payLoad = {
      'channel': channel,
      'username': botName,
      'text': text,
      'icon_emoji': ':ghost:'
    };

    //オプションを定義
    var options = {
      url: url,
      method: 'POST',
      headers: headers,
      json: payLoad
    };
    
    //リクエスト送信
    request(options, function (error, response, body) {
      //コールバック処理
    })
  }
};

