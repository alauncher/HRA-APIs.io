define({ "api": [
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
    "url": "发送广播com.hra.openADB",
    "title": "打开adb",
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
  }
] });
