(function () {
  // English is the markup default; this file only holds the Simplified Chinese strings.
  var zh = {
    "title": "Benjamin Lee — 平台工程师",
    "skip": "跳到正文",
    "nav.about": "关于",
    "nav.experience": "经历",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "loc": "新加坡",
    "role": "平台工程师 · OpenShift / Kubernetes · DevOps 与 SRE",
    "lede": "我构建并运维生产级容器平台，工作涵盖离线（断网）安装、供应链镜像、安全加固、可观测性，以及基于 GPU 的模型服务。我喜欢那种因为设计周到而在生产环境中“平淡无奇”的系统。",
    "email": "发邮件",
    "stat1": "生产平台",
    "stat2h": "物理隔离",
    "stat2": "离线交付",
    "stat3": "加固并通过审计",
    "stat4": "大模型推理服务",
    "h.about": "关于",
    "h.experience": "经历",
    "h.skills": "技能",
    "h.projects": "项目",
    "h.education": "教育背景",
    "about.1": "我是一名平台工程师，为政府客户在安全的离线环境中设计、构建并运维<strong>生产级 Red Hat OpenShift</strong> 集群。我的工作覆盖整个技术栈：基础设施供应与安装、私有镜像仓库与镜像同步、负载均衡与入口、存储、安全加固、日志，以及 GPU 上的 AI/ML 模型服务。",
    "about.2": "我重视运维的清晰度：编写真正能照着执行的运行手册，追根溯源而不是只修表面症状，并与网络、安全和应用团队紧密协作，安全地交付变更。",
    "job.title": "平台工程师",
    "job.when": "至今",
    "job.summary": "我为政府客户交付并运维一个多集群、物理隔离的 OpenShift 平台，承载应用与 AI/ML 工作负载。",
    "exp.platform": "<strong>平台交付。</strong>我使用用户自备基础设施（UPI）方式部署了多个生产 OpenShift 4 集群，包括 DNS、堡垒机、Ignition，以及控制平面、计算节点和专用存储节点的 RHCOS 引导。",
    "exp.supply": "<strong>离线供应链。</strong>我基于 Red Hat Quay 搭建了私有镜像仓库，并自动化了 <code>oc-mirror</code> 镜像集，覆盖平台、Red Hat、认证以及 OpenShift AI 的 Operator 目录，通过离线 OperatorHub 提供服务。",
    "exp.traffic": "<strong>流量与网络。</strong>我为 API 和泛域名入口实现了两层负载均衡，并与网络团队一起端到端排查集群连通性问题。",
    "exp.security": "<strong>安全与合规。</strong>我按 CIS 基准加固了 OpenShift 和 RHEL 9 主机，修复漏洞扫描发现的问题，记录有正当理由的例外项，并部署了 Advanced Cluster Security 和 Compliance Operator。",
    "exp.observ": "<strong>可观测性。</strong>我设计了基于 Vector、输出到 LokiStack 和 Splunk HEC 的集中式日志方案，并把它从无认证的 syslog 迁移到基于令牌、校验 TLS 的转发。",
    "exp.storage": "<strong>存储与 AI/ML。</strong>我部署了 OpenShift Data Foundation（Ceph 块/文件与 S3），并启用 OpenShift AI，在 NVIDIA GPU 节点上用 KServe 和 vLLM 提供大模型服务，模型权重存放在集群内对象存储中。",
    "exp.day2": "<strong>日常运维（Day-2）。</strong>我自动化了 etcd 备份，编写了升级、补丁和灾难恢复运行手册，并运维 GitOps、Pipelines、MetalLB、日志和可观测性等 Operator。",
    "sk.containers": "容器与编排",
    "sk.gitops": "GitOps 与 CI/CD",
    "sk.infra": "基础设施与网络",
    "sk.registry": "镜像仓库与离线环境",
    "sk.storage": "存储",
    "sk.observ": "可观测性",
    "sk.security": "安全与合规",
    "sk.ai": "AI / ML 平台",
    "sk.scripting": "脚本与工具",
    "p1.k": "家庭实验室 · 代表作",
    "p1.h": "Proxmox 上高可用、GitOps 驱动的 Kubernetes",
    "p1.p": "benkube 是运行在我自己的 Proxmox 虚拟化主机上的 9 节点上游 Kubernetes 集群（kubeadm），包含 3 个控制平面、3 个计算节点和 3 个基础设施节点。从虚拟机到运行中的应用，全部用代码构建，且每个组件版本都已锁定。",
    "p1.b1": "<strong>基础设施即代码。</strong>OpenTofu 使用最小权限的 Proxmox API 令牌，从 cloud-init 模板克隆虚拟机；Ansible 负责配置节点并引导集群。",
    "p1.b2": "<strong>网络。</strong>kube-vip 提供高可用 API 入口，Cilium 作为 CNI，MetalLB 分配负载均衡 IP，Traefik 作为入口控制器。专用基础设施节点让平台服务与业务负载相互隔离。",
    "p1.b3": "<strong>GitOps。</strong>Argo CD 采用 app-of-apps 结构，<code>git push</code> 即部署，配置漂移会被自动纠正。metrics-server 与 local-path 存储补全了平台。",
    "p1.b4": "<strong>运维。</strong>一份 15 章的运行手册涵盖升级、节点重建、备份与故障排查；动手实验（PV/PVC/StorageClass、S3 访问）让我可以安全地演练故障。",
    "p1.b5": "<strong>下一步。</strong>我计划在该集群上部署一个 web3 服务，基于我在 GitHub 上的钱包与交易机器人项目。",
    "p3.k": "Apple Watch + 自托管后端",
    "p3.h": "watch-bridge：手腕上的语音助手",
    "p3.p": "一个 SwiftUI 手表应用连接到我在家中运行的 Python 后端。请求通过 Cloudflare Tunnel 到达后端，因此无需开放任何入站端口。",
    "p3.b1": "会调用工具的 AI 助手，在发送或更改任何内容之前，会先在手腕上请求确认。",
    "p3.b2": "语音录音器：本地 Whisper 转写，并由 AI 生成标题和摘要。",
    "p3.b3": "来自家庭实验室监控的推送提醒、定时简报、表盘组件和 Siri 快捷指令。",
    "p2.k": "本网站",
    "p2.h": "通过 Cloudflare Tunnel 自托管",
    "p2.p": "benbambae.com 由同一台 Proxmox 主机上的一个小型 Fedora 虚拟机提供服务。该虚拟机向 Cloudflare 建立出站隧道，因此家庭网络无需开放入站端口，源站 IP 也不会暴露。",
    "p2.b1": "虚拟机由 cloud-init 模板克隆而来，使用静态地址和仅密钥的 SSH。",
    "p2.b2": "nginx 提供静态站点，配有加固的安全响应头，且没有任何第三方请求。",
    "p2.b3": "GitOps 风格的拉取式部署：systemd 定时器跟踪本 GitHub 仓库，并通过符号链接切换原子化地发布每次新提交，因此回滚是即时的。",
    "p2.b4": "TLS 与 DNS 由 Cloudflare 处理，重启后一切自动启动。",
    "edu.degree": "工程学学士，电气与电子工程",
    "edu.school": "南洋理工大学 · 新加坡",
    "contact.h": "聊一聊",
    "contact.p": "欢迎与我交流平台工程、Kubernetes 与 OpenShift，以及如何把基础设施运维好。",
    "foot.host": "自托管于 Proxmox",
    "foot.src": "GitHub 源码",
    "foot.top": "回到顶部 ↑"
  };

  var root = document.documentElement;
  var KEY = "lang";
  var en = null;           // English snapshot, taken from the markup
  var enTitle = document.title;

  function snapshot() {
    en = {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      en[el.getAttribute("data-i18n")] = el.innerHTML;
    });
  }

  function apply(lang) {
    if (!en) snapshot();
    var dict = lang === "zh" ? zh : en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v !== undefined) el.innerHTML = v;
    });
    document.title = lang === "zh" ? zh.title : enTitle;
    root.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "zh" ? "EN" : "中文";
      btn.setAttribute("lang", lang === "zh" ? "en" : "zh-Hans");
      btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    }
  }

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = saved();
    if (lang !== "zh") lang = "en";
    if (lang === "zh") apply("zh");
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      if (lang !== "zh") apply("en");
      btn.addEventListener("click", function () {
        var next = root.getAttribute("lang") === "zh-Hans" ? "en" : "zh";
        apply(next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
      });
    }
  });
})();
