Link: 

 - https://about.gitlab.com/2016/12/22/gitlab-8-15-released/
 - http://www.infoq.com/cn/news/2017/01/gitlab-8-15-released

<!-- TOC -->

- [Web Terminal](#web-terminal)
- [Manual Actions from the Pipeline Graph](#manual-actions-from-the-pipeline-graph)
  - [`.gitlab-ci.yml` 文件开启手动选项](#gitlab-ciyml-文件开启手动选项)
  - [Pipeline Graph 效果如下](#pipeline-graph-效果如下)

<!-- /TOC -->

# Web Terminal
maybe use with k8s services config, let try it later

# Manual Actions from the Pipeline Graph

对于 gitlab ci 配置项里面开启了手动启动选项的那些 job，现在可以直接在 Pipeline Graph 里面进行操作了

## `.gitlab-ci.yml` 文件开启手动选项

```yml
deploy.pvsub.master.prod:
  scripts:
    - echo 'ding'
  when: manual # 就是这一个
```

## Pipeline Graph 效果如下

![manual-actions-from-the-pipeline-graph](http://om4h4iqhe.bkt.clouddn.com/manual-actions-from-the-pipeline-graph-1.png)