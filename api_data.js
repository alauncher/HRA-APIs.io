define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./byd_dest/main.js",
    "group": "D:\\Software\\byd_api\\byd_dest\\main.js",
    "groupTitle": "D:\\Software\\byd_api\\byd_dest\\main.js",
    "name": ""
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老化架ID.</p>"
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
          "content": "?id=1234&status=online&time=1634666180",
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
    "filename": "./byd_src/message.js",
    "groupTitle": "消息",
    "name": "GetMessage"
  },
  {
    "type": "POST",
    "url": "/message",
    "title": "Alarm",
    "group": "消息",
    "version": "1.0.0",
    "description": "<p>报警，上报异常情况；</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老化架ID.</p>"
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
          "content": "{\n\t\"id\": \"1234\",\n\t\"status\": \"online|offline|error\",\n\t\"time\": 1634666180,\n\t\"error_code\": \"80\"\n\t\"error_msg\": \"80\"\n}",
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
    "filename": "./byd_src/message.js",
    "groupTitle": "消息",
    "name": "PostMessage"
  },
  {
    "type": "post",
    "url": "/upload",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>老化架ID.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "station_id",
            "description": "<p>工位ID.</p>"
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
            "description": "<p>：高压侧电流.</p>"
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
          "content": "{ \n\t\"id\": \"1234\",\n\t\"version\": \"1.0\",\n\t\"status\":\"online|offline|error\",\n\t\"progress\": \"80\",\n\t\"values\": [\n\t{\n\t\t\"station_id\": \"35231505283\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505284\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505285\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505286\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505287\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t},\n\t{\n\t\t\"station_id\": \"35231505288\",\n\t\t\"water_tank_temperature\": \"E0:DB:55:E4:**:**\",\n\t\t\"water_tank_pressure\": \"12\",\n\t\t\"water_tank_flow\": \"1231\",\n\t\t\"water_tank_remain\": \"12\",\n\t\t\"water_tank_capacity_upper_limit\": \"12\",\n\t\t\"water_tank_capacity_lower_limit\": \"12\",\n\t\t\"communication_voltage\": \"12\",\n\t\t\"communication_electricity\": \"12\",\n\t\t\"low_side_voltage\": \"12\",\n\t\t\"low_side_electricity\": \"12\",\n\t\t\"high_side_voltage\": \"12\",\n\t\t\"high_side_electricity\": \"12\",\n\t\t\"temperature\": \"50\",\n\t\t\"temperature_upper_limit\": \"90\",\n\t\t\"temperature_lower_limit\": \"12\",\n\t\t\"humidity\": \"50\",\n\t\t\"humidity_upper_limit\": \"90\",\n\t\t\"humidity_lower_limit\": \"10\"\n\t}\n\t]\n}",
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
    "filename": "./byd_src/device.js",
    "groupTitle": "设备"
  }
] });
