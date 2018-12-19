define({ "api": [
  {
    "type": "broadcast",
    "url": "发送广播1",
    "title": "静默安装应用",
    "group": "APPs",
    "version": "0.0.1",
    "description": "<p>静默卸载应用</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageName",
            "description": "<p>需卸载应用的包名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "String pkg = \"com.android.camera2\";\nIntent i = new Intent(\"com.hra.Silence.uninstall\");\ni.putExtra(\"packageName\",pkg);\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/apps.java",
    "groupTitle": "APPs",
    "name": "Broadcast1"
  },
  {
    "type": "broadcast",
    "url": "发送广播2",
    "title": "清空应用安装白名单",
    "group": "APPs",
    "version": "0.0.1",
    "description": "<p>白名单内应用可以安装，否则不可安装</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ArrayList",
            "optional": false,
            "field": "packageName",
            "description": "<p>白名单包名列表</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flag",
            "description": "<p>标记位：1添加，2删除，3清空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "ArrayList pkgList = new ArrayList<String>();\npkgList.add(\"com.android.camera2\");\npkgList.add(\"com.android.settings\");\nIntent i = new Intent(\"com.hra.whitelist_app.update\");\ni.putStringArrayListExtra(\"packageName\",pkgList);\ni.putExtra(\"flag\",1);\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/apps.java",
    "groupTitle": "APPs",
    "name": "Broadcast2"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.add_whiteList",
    "title": "设置应用白名单",
    "group": "APPs",
    "version": "0.0.1",
    "description": "<p>白名单内应用可以安装，否则不可安装</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ArrayList",
            "optional": false,
            "field": "packageName",
            "description": "<p>白名单包名列表</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "flag",
            "description": "<p>标记位：1添加，2删除，3清空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "ArrayList pkgList = new ArrayList<String>();\npkgList.add(\"com.android.camera2\");\npkgList.add(\"com.android.settings\");\nIntent i = new Intent(\"com.hra.whitelist_app.update\");\ni.putStringArrayListExtra(\"packageName\",pkgList);\ni.putExtra(\"flag\",1);\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/apps.java",
    "groupTitle": "APPs",
    "name": "BroadcastComHraAdd_whitelist"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.Silence.uninstall",
    "title": "静默卸载应用",
    "group": "APPs",
    "version": "0.0.1",
    "description": "<p>静默卸载应用</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "packageName",
            "description": "<p>需卸载应用的包名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "String pkg = \"com.android.camera2\";\nIntent i = new Intent(\"com.hra.Silence.uninstall\");\ni.putExtra(\"packageName\",pkg);\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/apps.java",
    "groupTitle": "APPs",
    "name": "BroadcastComHraSilenceUninstall"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.add_whiteList",
    "title": "设置网络白名单",
    "group": "NetWork",
    "version": "0.0.1",
    "description": "<p>白名单内网络可以上网，不受全局网络控制（模糊查询）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ArrayList",
            "optional": false,
            "field": "whiteList",
            "description": "<p>白名单列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "ArrayList whiteList = new ArrayList<String>();\nwhiteList.add(\"www.baidu.com\");\nwhiteList.add(\"www.sina.com.cn\");\nIntent i = new Intent(\"com.hra.add_whiteList\");\ni.putStringArrayListExtra(\"whiteList\",whiteList);\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/network.java",
    "groupTitle": "NetWork",
    "name": "BroadcastComHraAdd_whitelist"
  },
  {
    "type": "broadcast",
    "url": "发送广播1",
    "title": "禁用ADB连接",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast1"
  },
  {
    "type": "broadcast",
    "url": "发送广播2",
    "title": "启用蓝牙",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast2"
  },
  {
    "type": "broadcast",
    "url": "发送广播3",
    "title": "禁用蓝牙",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast3"
  },
  {
    "type": "broadcast",
    "url": "发送广播4",
    "title": "启用摄像头",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast4"
  },
  {
    "type": "broadcast",
    "url": "发送广播5",
    "title": "禁用SD卡",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast5"
  },
  {
    "type": "broadcast",
    "url": "发送广播5",
    "title": "禁用摄像头",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast5"
  },
  {
    "type": "broadcast",
    "url": "发送广播5",
    "title": "启用SD卡",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "Broadcast5"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.openADB",
    "title": "启用ADB连接",
    "group": "Other",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/other.java",
    "groupTitle": "Other",
    "name": "BroadcastComHraOpenadb"
  },
  {
    "type": "broadcast",
    "url": "发送广播1",
    "title": "显示恢复出厂设置",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast1"
  },
  {
    "type": "broadcast",
    "url": "发送广播2",
    "title": "隐藏恢复出厂设置",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast2"
  },
  {
    "type": "broadcast",
    "url": "发送广播3",
    "title": "系统时间设置",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast3"
  },
  {
    "type": "broadcast",
    "url": "发送广播4",
    "title": "关机",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast4"
  },
  {
    "type": "broadcast",
    "url": "发送广播5",
    "title": "重启",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast5"
  },
  {
    "type": "broadcast",
    "url": "发送广播6",
    "title": "隐藏Setting根目录项",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "Broadcast6"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.setDefaultBrowser",
    "title": "默认浏览器",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "BroadcastComHraSetdefaultbrowser"
  },
  {
    "type": "broadcast",
    "url": "发送广播com.hra.setHomeLauncher",
    "title": "默认Launcher",
    "group": "Settings",
    "version": "0.0.1",
    "description": "<p>通过发送广播打开adb</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "Intent i = new Intent(\"com.hra.openADB\");\nsendBroadcast(i);",
          "type": "Android"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "None",
          "type": "Android"
        }
      ]
    },
    "filename": "hra_apisource/settings.java",
    "groupTitle": "Settings",
    "name": "BroadcastComHraSethomelauncher"
  }
] });
