# 组件说明

该组件是用于辅助用户进行函数调用的组件。主要封装了多种函数计算的事件格式。

```

  ┌────────────┬───────────────────────┬──────────┬───────────────────────────┐
  │    方法     │       方法说明         │ 入参示例   │      命令行调用示例         │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ http       │ HTTP 触发器事件         │          │ s cli fc-event http       │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ cdn        │ CDN 触发器事件          │          │ s cli fc-event cdn        │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ mns        │ MNS 触发器事件          │          │ s cli fc-event mns        │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ oss        │ OSS 触发器事件          │          │ s cli fc-event oss        │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ sls        │ SLS 触发器事件          │          │ s cli fc-event sls        │
  ├────────────┼───────────────────────┼──────────┼───────────────────────────┤
  │ tablestore │ TableStore 触发器事件   │          │ s cli fc-event tablestore │
  └────────────┴───────────────────────┴──────────┴───────────────────────────┘
```

使用方法非常简单，例如，我想在当前项目下创建一个oss触发器的事件模板，只需执行：

```
s cli fc-event oss
```

可以看到系统提醒：

```

      OSS event template created successfully.
      
      👓 Event Template Path: event-template/oss-event.json
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  event-template/oss-event.json]
      
      More information about OSS Trigger: 
        📝 https://help.aliyun.com/document_detail/74763.htm
      
      
End of method: oss
```

此时就可以在当前目录下看到文件`./event-template/oss-event.json`：

```
{
  "events": [
    {
      "eventName": "ObjectCreated:PutObject",
      "eventSource": "acs:oss",
      "eventTime": "2017-04-21T12:46:37.000Z",
      "eventVersion": "1.0",
      "oss": {
        "bucket": {
          "arn": "acs:oss:cn-shanghai:123456789:bucketname",
          "name": "testbucket",
          "ownerIdentity": "123456789",
          "virtualBucket": ""
        },
        "object": {
          "deltaSize": 122539,
          "eTag": "688A7BF4F233DC9C88A80BF985AB7329",
          "key": "image/a.jpg",
          "size": 122539
        },
        "ossSchemaVersion": "1.0",
        "ruleId": "9adac8e253828f4f7c0466d941fa3db81161****"
      },
      "region": "cn-shanghai",
      "requestParameters": {
        "sourceIPAddress": "140.205.***.***"
      },
      "responseElements": {
        "requestId": "58F9FF2D3DF792092E12044C"
      },
      "userIdentity": {
        "principalId": "123456789"
      }
    }
  ]
}
```

