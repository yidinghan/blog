Release Article: https://about.gitlab.com/2016/11/22/gitlab-8-14-released/

# Prevent merge until Review is done

除了在 MR 上用 WIP 可以避免被合并，还可以通过这个选项来保证，在全部的讨论被解决之前 MR 被合并。

这种情况常见于 code review 的时候

## 先配置生效

![prevent merge until review is done 1](http://om4h4iqhe.bkt.clouddn.com/prevent-merge-until-review-is-done-1.jpg)

## 效果如下

![prevent merge until review is done 2](http://om4h4iqhe.bkt.clouddn.com/prevent-merge-until-review-is-done-2.jpg)

官方文档，[在这里](https://docs.gitlab.com/ee/user/discussions/index.html#only-allow-merge-requests-to-be-merged-if-all-discussions-are-resolved)

# Delete all Merged Branches

 - 在 MR 的时候，已经有一个合并后删除源分支的选项，但是总有忘记勾选的时候。
 - 有很多分支是在本地合并的，虽然本地可能删除了，但是远端没有删除

![delete all merged branches](http://om4h4iqhe.bkt.clouddn.com/delete-all-merged-branches.gif)

# Support for private container registries in GitLab CI builds

如果需用到第三方 docker 仓库，很有可能就需要登陆操作镜像

但是在 runner 里面，特别是 docker runner 里面，仓库的登陆态是没法得到保证的，所以常常需要通过 `docker login` 来保证登陆态

现在可以通过 `DOCKER_AUTH_CONFIG` 这个变量来减少这一操作，变量的格式如下，其中 `registry.example.com` 就是仓库的地址

```json
{
    "auths": {
        "registry.example.com": {
            "auth": "bXlfdXNlcm5hbWU6bXlfcGFzc3dvcmQ="
        }
    }
}
```

眼熟的就会发现，这其实就是 `~/.docker/config.json` 文件

官方文档，[在这里](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#using-a-private-container-registry)