Release Article: https://about.gitlab.com/2017/08/22/gitlab-9-5-released/

# Automatic Retry for Failed CI Jobs

再次之前，job failed 只能通过手动去进行重试

偶尔一两次还好，多了也会是一件烦心事，特别是失败是一下通过重试就可以解决的问题的时候

通过这一特性，配置一下，就可以远离这种烦恼啦

```yml
test:
  script: rspec
  retry: 2
```

![automatic-retry-for-failed-ci-jobs](https://about.gitlab.com/images/9_5/ci_retry.png)

更多重试的介绍，[在这里](https://docs.gitlab.com/ee/ci/yaml/#retry)

# The End

 - 上一篇: [Gitlab-ChangeLog-9-4](https://github.com/yidinghan/blog/blob/master/Gitlab-ChangeLog-9-4.md)