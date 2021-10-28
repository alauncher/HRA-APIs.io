define({ "api": [
  {
    "type": "POST",
    "url": "/alarm",
    "title": "Alarm",
    "group": "报警",
    "version": "1.0.0",
    "description": "<p>报警，上报异常情况；</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rack_code",
            "description": "<p>老化架编码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>上报时间戳</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>异常码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_msg",
            "description": "<p>异常信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式 body/json:",
          "content": "{\n\t\"id\": \"1234\",\n\t\"status\": \"online|offline|error\",\n\t\"time\": 1634666180,\n\t\"error_code\": \"80\",\n\t\"error_msg\": \"80\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "byd_src/message.js",
    "groupTitle": "报警",
    "name": "PostAlarm"
  },
  {
    "type": "GET",
    "url": "/message",
    "title": "HeartBeat",
    "group": "消息",
    "version": "1.0.0",
    "description": "<p>心跳，保证10分钟内上报一次信息，超过10分钟视为设备离线；</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rack_code",
            "description": "<p>老化架编码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>上报时间戳</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数",
          "content": "?rack_code=1234&status=online&time=1634666180",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "byd_src/message.js",
    "groupTitle": "消息",
    "name": "GetMessage"
  },
  {
    "type": "POST",
    "url": "/data",
    "title": "Data",
    "group": "老化结果",
    "version": "1.0.0",
    "description": "<p>完成老化之后，上报老化结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rack_code",
            "description": "<p>老化架编码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "station_code",
            "description": "<p>产品条码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品条码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>结果 EndWithBad结束不良/EndWithGood结束良品/CheckSelf自检/CheckSelfErr自检异常</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "running_time",
            "description": "<p>运行时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>异常码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "error_msg",
            "description": "<p>异常信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式 body/json:",
          "content": "{\n\t\"rack_code\": \"1234\",\n\t\"station_code\": \"1234\",\n\t\"product_code\": \"1234\",\n\t\"result\": \"EndWithBad\",\n\t\"start_time\": 1634666180,\n\t\"end_time\": 1634666180,\n\t\"running_time\": 9\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "byd_src/message.js",
    "groupTitle": "老化结果",
    "name": "PostData"
  },
  {
    "type": "post",
    "url": "/uploads",
    "title": "Upload Infos",
    "version": "1.0.0",
    "name": "uploadInfos",
    "group": "设备",
    "description": "<p>上传老化架实时信息，同时上报6个工位，以body/json方式上传;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rack_code",
            "description": "<p>老化架编码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本信息.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>老化架状态.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "progress",
            "description": "<p>老化架进度(0~100).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "station_code",
            "description": "<p>工位编码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_code",
            "description": "<p>产品条码.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_temperature",
            "description": "<p>水箱温度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_pressure",
            "description": "<p>水箱压力.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_flow",
            "description": "<p>水箱流量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_remain",
            "description": "<p>水箱剩余水量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_capacity_upper_limit",
            "description": "<p>水箱上限.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "water_tank_capacity_lower_limit",
            "description": "<p>水箱下限.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "communication_voltage",
            "description": "<p>交流侧电压.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "communication_electricity",
            "description": "<p>交流侧电流.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "low_side_voltage",
            "description": "<p>低压侧电压.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "low_side_electricity",
            "description": "<p>高压侧电流.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "high_side_voltage",
            "description": "<p>高压侧电压.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "high_side_electricity",
            "description": "<p>高压侧电流.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temperature",
            "description": "<p>温度.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temperature_upper_limit",
            "description": "<p>温度上限.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temperature_lower_limit",
            "description": "<p>温度下限.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "humidity",
            "description": "<p>湿度.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "humidity_upper_limit",
            "description": "<p>湿度上限.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "humidity_lower_limit",
            "description": "<p>湿度下限.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式 body/json:",
          "content": "{ \n\t\"id\": \"1234\",\n\t\"version\": \"1.0\",\n\t\"status\":\"online|offline|error\",\n\t\"progress\": \"80\",\n\t\"values\": [\n\t{\n\t\t\"station_id\": \"35231505283\",\n\t\t\"product_code\": \"35231505283\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505284\",\n\t\t\"product_code\": \"35231505283\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505285\",\n\t\t\"product_code\": \"35231505283\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505286\",\n\t\t\"product_code\": \"35231505283\", \n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505287\",\n\t\t\"product_code\": \"35231505283\", \n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505288\",\n\t\t\"product_code\": \"35231505283\", \n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "byd_src/device.js",
    "groupTitle": "设备"
  }
] });
