const request = require('request');

exports.echoBot = function echoBot(req, res) {
  if (req.body.text === undefined || req.body.text === '') {
    // テキストがなければエラーを返す
    res.status(400).send('No message defined!');
  } else {
    // 環境に応じて設定
    var url = '';
    var channel = '';
    var botName = 'Bot';

    // slash commandの引数を取得
    var text = req.body.text;

    // ヘッダーを定義
    var headers = {
      'Content-Type': 'application/json',
    };

    // ペイロードを定義
    var payLoad = {
      'channel': channel,
      'username': botName,
      'text': text,
      'icon_emoji': ':ghost:'
    };

    // オプションを定義
    var options = {
      url: url,
      method: 'POST',
      headers: headers,
      json: payLoad
    };

    // リクエスト送信
    request(options, function (error, response, body) {
      // コールバック処理
      res.status(200).send('Success!');
    })
  }
};
