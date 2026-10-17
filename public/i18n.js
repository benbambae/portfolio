(function () {
  var zh = {
    "nav.about": "关于",
    "nav.experience": "经历",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.contact": "联系",

    "hero.name": "李文龙 <span class=\"alt-name\">Benjamin Lee</span>",
    "hero.loc": "新加坡",
    "hero.role": "平台工程师 · OpenShift / Kubernetes · DevOps 与 SRE",
    "hero.lede": "我负责构建和运维生产级容器平台：两套离线（air-gapped）OpenShift 集群，承载一个 LLM 应用，自上线以来零非计划停机。工作涵盖离线安装、镜像供应链同步、安全加固、可观测性以及基于 GPU 的模型服务。好的系统在生产环境中是“无聊”的，因为它们经过了精心设计。",
    "cta.email": "发送邮件",

    "stat.1a": "2 套集群 · 19 个节点",
    "stat.1b": "生产级 OpenShift&nbsp;4",
    "stat.2a": "0 非计划停机",
    "stat.2b": "自 2026 年 7 月上线以来",
    "stat.3a": "离线环境",
    "stat.3b": "CIS 加固并通过审计",
    "stat.4a": "NVIDIA DGX",
    "stat.4b": "LLM / RAG 模型服务",

    "sec.about": "关于我",
    "sec.experience": "工作经历",
    "sec.skills": "技能",
    "sec.projects": "项目",
    "sec.education": "教育背景",

    "about.p1": "我是一名平台工程师，为政府客户在安全、离线的环境中设计、构建并运维<strong>生产级 Red Hat OpenShift</strong> 集群。工作覆盖整个技术栈：基础设施准备与安装、私有镜像仓库与镜像同步、负载均衡与入口流量、存储、安全加固、日志，以及 GPU 上的 AI/ML 模型服务。",
    "about.p2": "我最看重运维的清晰度：编写真正可以照着执行的运维手册，从根因解决问题而不是只修补表象，并与网络、安全和应用团队紧密协作，安全地交付变更。",

    "job.title": "平台工程师",
    "job.org": "ST Engineering（新科工程）· 新加坡",
    "job.when": "至今",
    "job.summary": "交付并运维一套双集群、离线的 OpenShift 平台（19 个节点），为政府客户运行生产级 LLM 应用，自 2026 年 7 月上线以来零非计划停机。",
    "job.b1": "<strong>平台交付。</strong>搭建 2 套生产级 OpenShift 4 集群：一套 12 节点应用集群（3 control-plane、3 worker、3 OpenShift Data Foundation、3 infra），采用 UPI 方式通过 bootstrap 节点安装；另一套 7 节点裸金属 AI 集群（3 control-plane、3 infra、NVIDIA DGX GPU worker），采用 Agent-based Installer 安装。",
    "job.b2": "<strong>应用平台。</strong>运行一个生产级 RAG / LLM 对话服务，跨两套集群共 15 个工作负载，包括 Web 前端与 API、Keycloak SSO、MongoDB、Weaviate 向量数据库以及基于 GPU 的检索增强推理，自 2026 年 7 月以来零非计划停机。",
    "job.b3": "<strong>离线软件供应链。</strong>搭建私有 Red Hat Quay 镜像仓库，并自动化 <code>oc-mirror</code> 镜像集，覆盖 4 个 Operator 目录（平台、Red Hat、认证及 OpenShift AI）共 150+ 个镜像，通过离线 OperatorHub 提供服务。",
    "job.b4": "<strong>流量与网络。</strong>为两套集群的 API 与通配符 Ingress 实现双层负载均衡，并与网络团队协作进行端到端连通性排障。",
    "job.b5": "<strong>安全与合规。</strong>按 CIS Benchmark 加固 OpenShift 与 RHEL 9 主机，修复 100+ 项漏洞扫描问题，记录合理的偏差说明，并部署 Advanced Cluster Security 与 Compliance Operator。",
    "job.b6": "<strong>可观测性。</strong>基于 OpenTelemetry Collector、Prometheus、Grafana 与 Grafana Tempo 构建指标与分布式链路追踪；设计 Vector 到 LokiStack 及 Splunk HEC 的集中式日志，并将其从无认证的 syslog 升级为基于令牌、TLS 校验的转发。",
    "job.b7": "<strong>存储与 AI/ML。</strong>部署 OpenShift Data Foundation（Ceph 块/文件存储与 S3），启用 OpenShift AI，在 DGX 节点上通过 KServe 与 vLLM 提供 LLM 服务，模型权重存放于集群内对象存储。",
    "job.b8": "<strong>Day-2 运维。</strong>自动化每日 etcd 备份（保留 7 天），编写 15+ 份升级、补丁及灾难恢复手册（恢复演练在 1 小时内完成），并运维 GitOps、Pipelines、MetalLB、日志与可观测性等 Operator。",

    "skill.1": "容器与编排",
    "skill.2": "GitOps 与 CI/CD",
    "skill.3": "基础设施与网络",
    "skill.4": "镜像仓库与离线环境",
    "skill.5": "存储",
    "skill.6": "可观测性",
    "skill.7": "安全与合规",
    "skill.8": "AI / ML 平台",
    "skill.9": "脚本与工具",

    "p1.kicker": "家庭实验室",
    "p1.title": "Proxmox 上的高可用 Kubernetes",
    "p1.desc": "运行在我自己 Proxmox 虚拟化主机上的 9 节点原生 Kubernetes 集群，包含 3 个 control-plane、3 个 worker 和 3 个 infra 节点，从虚拟机到集群全部以代码方式构建。",
    "p1.b1": "OpenTofu 基于 cloud-init 模板创建虚拟机，Ansible 配置节点并引导集群。",
    "p1.b2": "Cilium 作为 CNI，MetalLB 提供负载均衡，Traefik 作为 Ingress，local-path provisioner 提供存储。",
    "p1.b3": "高可用 API 入口，并以专用 infra 节点将平台服务与业务负载隔离。",
    "p2.kicker": "本网站",
    "p2.title": "通过 Cloudflare Tunnel 自托管",
    "p2.desc": "benbambae.com 运行在同一台 Proxmox 主机上的一台小型 Fedora 虚拟机中。虚拟机主动向 Cloudflare 建立出站隧道，因此家庭网络不开放任何入站端口，源站 IP 也不会暴露。",
    "p2.b1": "虚拟机由 cloud-init 模板克隆，使用静态地址和仅密钥的 SSH 登录。",
    "p2.b2": "nginx 提供静态站点，配置加固的安全响应头，且不发起任何第三方请求。",
    "p2.b3": "GitOps 风格的拉取式部署：systemd 定时器跟踪本 GitHub 仓库，通过符号链接切换原子发布每次提交，可即时回滚。",
    "p2.b4": "Cloudflare 负责 TLS 与 DNS，所有服务在重启后自动启动。",

    "edu.degree": "电气与电子工程 工学学士",
    "edu.school": "南洋理工大学 · 新加坡",

    "contact.title": "联系我",
    "contact.text": "欢迎交流平台工程、Kubernetes 与 OpenShift，以及如何把基础设施运维好。",
    "foot.host": "自托管于 Proxmox",
    "foot.src": "GitHub 源代码",
    "foot.top": "返回顶部 ↑"
  };

  var root = document.documentElement;
  var titles = { en: document.title, zh: "李文龙 Benjamin Lee — 平台工程师" };
  var english = {};

  function pick() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q === "zh" || q === "en") return q;
    } catch (e) {}
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return /^zh\b/i.test(navigator.language || "") ? "zh" : "en";
  }

  function apply(lang) {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], key = el.getAttribute("data-i18n");
      if (!(key in english)) english[key] = el.innerHTML;
      var text = lang === "zh" ? zh[key] : english[key];
      if (text != null) el.innerHTML = text;
    }
    root.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    document.title = titles[lang];
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "zh" ? "EN" : "中文";
      btn.setAttribute("lang", lang === "zh" ? "en" : "zh-Hans");
      btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = pick();
    apply(lang);
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        lang = lang === "zh" ? "en" : "zh";
        apply(lang);
        try { localStorage.setItem("lang", lang); } catch (e) {}
        try {
          var url = new URL(location.href);
          if (url.searchParams.has("lang")) {
            url.searchParams.set("lang", lang);
            history.replaceState(null, "", url);
          }
        } catch (e) {}
      });
    }
  });
})();
