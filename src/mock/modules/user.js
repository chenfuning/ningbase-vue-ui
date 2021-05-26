/*
 * 用户管理模块
 */

// 保存
export function save() {
  return {
    url: 'http://localhost:8080/user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": "保存成功",
      "data": 1
    }
  }
}// 删除
export function del() {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": "删除成功",
      "data": 1
    }
  }
}

// 分页查询
export function findPage() {
  return {
    url: 'http://localhost:8080/user/findPage',
    type: 'post',
    data: {
      data: {
        pageNum: 1,
        pageSize: 5,
        totalSize: 5,
        totalPages: 1,
        content: [{
          "userId": 1,
          "username": "admin",
          "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
          "salt": "YzcmCZNvbXocrsz9dm8e",
          "email": "admin@qq.com",
          "mobile": "13612345678",
          "status": 1,
          "deptId": null,
          "deptName": null,
          "createBy": null,
          "createTime": "2018-08-14T03:11:11.000+0000",
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "delFlag": 0
        },
          {
            "userId": 2,
            "username": "Louis",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "louis@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          }
        ]
      }
    }
  }
}
