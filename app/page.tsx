const phases = [
  {
    key: "strategy",
    title: "1. Migration Strategy & Alignment",
    description:
      "Clarify scope, success metrics, and executive sponsorship before any technical work begins.",
    steps: [
      "Inventory workloads, business processes, dependencies, SLAs, and compliance requirements.",
      "Define migration drivers (cost savings, agility, resilience) and measurable KPIs.",
      "Select a migration strategy per workload: rehost, re-platform, refactor, replace, or retire.",
      "Establish governance: decision board, change control, escalation paths, communication cadence.",
      "Create a high-level timeline with critical milestones, blackout windows, and risk thresholds."
    ]
  },
  {
    key: "landing-zone",
    title: "2. Landing Zone & Foundation",
    description:
      "Build a secure, multi-account AWS environment that matches organizational controls.",
    steps: [
      "Set up AWS Organizations with SCPs, guardrails, and account vending (Control Tower or custom).",
      "Design network topology: VPCs, subnets, routing, ingress/egress, and hybrid connectivity (VPN/Direct Connect).",
      "Implement identity and access: AWS SSO, IAM Identity Center, federated SSO, and least-privilege roles.",
      "Deploy baseline security services: CloudTrail, Config, GuardDuty, Security Hub, Detective, KMS, centralized logging.",
      "Codify infrastructure with IaC (Terraform, AWS CDK, CloudFormation) and integrate into CI/CD pipelines."
    ]
  },
  {
    key: "portfolio",
    title: "3. Portfolio Discovery & Prioritization",
    description:
      "Gather detailed technical and business inputs to sequence migrations intelligently.",
    steps: [
      "Use AWS Application Discovery Service, Migration Evaluator, or custom scripts to collect utilization and dependency data.",
      "Map application tiers, data flows, interfaces, and operational runbooks.",
      "Perform total cost of ownership comparisons and identify quick wins vs. complex refactors.",
      "Align migration waves with business calendars, compliance freezes, and resource availability.",
      "Prepare workload runbooks defining target architecture, cutover plan, testing approach, and rollback criteria."
    ]
  },
  {
    key: "pilot",
    title: "4. Pilot & Proof of Concept",
    description:
      "Validate tooling, processes, and team readiness with low-risk workloads.",
    steps: [
      "Stand up AWS migration factory tooling (Migration Hub, Application Migration Service, Database Migration Service).",
      "Execute a pilot migration end-to-end including discovery, replication, cutover, and post-migration validation.",
      "Benchmark migrated workloads for performance, cost, resilience, and operational effort against targets.",
      "Refine runbooks, automation scripts, monitoring dashboards, and escalation paths based on pilot lessons.",
      "Decide go/no-go for broader rollout; secure stakeholder approval and resource commitments."
    ]
  },
  {
    key: "execution",
    title: "5. Migration Wave Execution",
    description:
      "Move workloads in prioritized waves with rigorous change management and observability.",
    steps: [
      "Implement replication and synchronization (block-level, database, file) with clear RPO/RTO objectives.",
      "Conduct pre-cutover rehearsals to validate automation, data consistency, and failover/fallback options.",
      "Coordinate cutover events with business owners; enforce change freezes and communication plans.",
      "Execute application, data, and network cutovers; monitor KPIs in real time (CloudWatch, X-Ray, custom dashboards).",
      "Finalize operational handover: update runbooks, disaster recovery plans, and support SLAs."
    ]
  },
  {
    key: "optimization",
    title: "6. Optimization & Modernization",
    description:
      "Leverage AWS-native services to improve cost, resilience, and developer velocity post-migration.",
    steps: [
      "Right-size instances, modernize storage, and enable elasticity via Auto Scaling or serverless patterns.",
      "Adopt managed database services (RDS, Aurora, DynamoDB) and decouple monoliths with event-driven designs.",
      "Embed cost governance: tagging, budgets, anomaly detection, FinOps guardrails, and chargeback models.",
      "Integrate security and compliance automation (Config rules, Control Tower guardrails, Inspector, Detective).",
      "Establish ongoing platform engineering practices: golden AMIs, shared services, observability, and SRE playbooks."
    ]
  }
];

const readinessChecklist = [
  {
    title: "People & Process Readiness",
    items: [
      "Executive sponsor, migration lead, and workload owners identified with responsibilities defined.",
      "Cloud Center of Excellence (CCoE) staffed with architecture, security, ops, and FinOps representation.",
      "Training plan for AWS fundamentals, landing zone operations, and workload-specific tooling.",
      "Communication matrix covering cadence, channels, and stakeholder expectations."
    ]
  },
  {
    title: "Platform Preparedness",
    items: [
      "Landing zone accounts provisioned with baseline security controls enforced.",
      "Connectivity validated (VPN/Direct Connect) with throughput testing against migration volumes.",
      "Observability stack ready: logging, metrics, tracing, synthetic tests, and alert routing.",
      "CI/CD pipelines capable of deploying infrastructure and application artifacts to AWS."
    ]
  },
  {
    title: "Workload Documentation",
    items: [
      "Source environment performance baselines captured for CPU, memory, I/O, and latency.",
      "Application dependency maps including DNS, certificates, external APIs, and cron jobs.",
      "Data governance documented: sensitivity levels, encryption requirements, retention policies.",
      "Testing strategy defined covering functional, performance, security, and DR drills."
    ]
  }
];

const riskMitigations = [
  {
    risk: "Uncontrolled scope creep",
    mitigation:
      "Maintain a living backlog, enforce change control, and time-box backlog grooming to every migration wave."
  },
  {
    risk: "Data inconsistency during cutover",
    mitigation:
      "Use CDC-enabled replication, quiesce writes before cutover, and run validation scripts comparing data checksums."
  },
  {
    risk: "Insufficient security posture",
    mitigation:
      "Run pre-migration security assessments, implement guardrails, and integrate security reviews into every wave."
  },
  {
    risk: "Business disruption due to downtime",
    mitigation:
      "Model downtime tolerance per workload, schedule cutovers in low-traffic windows, and rehearse rollback procedures."
  },
  {
    risk: "Cost overruns post-migration",
    mitigation:
      "Enable AWS Cost Explorer, tag resources from day one, and schedule optimization reviews within 30 days of cutover."
  }
];

const tools = [
  {
    name: "AWS Application Migration Service",
    purpose:
      "Lift-and-shift replication for Windows/Linux servers with continuous block-level sync and test cutovers."
  },
  {
    name: "AWS Database Migration Service",
    purpose:
      "Heterogeneous or homogeneous database replication with minimal downtime leveraging CDC where available."
  },
  {
    name: "AWS Migration Hub",
    purpose:
      "Centralize migration tracking, runbooks, metrics, and integration with partner tooling."
  },
  {
    name: "AWS Cloud Adoption Framework (CAF)",
    purpose:
      "Align organizational capabilities spanning business, people, governance, platform, security, and operations."
  },
  {
    name: "Well-Architected Tool",
    purpose:
      "Assess workload architecture across operational excellence, security, reliability, performance, and cost pillars."
  }
];

const postMigration = [
  "Run Well-Architected reviews within 60 days to capture quick wins and backlog future improvements.",
  "Establish continuous compliance scans (Security Hub, Audit Manager) tied to ticketing workflows.",
  "Create monthly FinOps reviews covering spend variance, reserved instance commitments, and savings plan optimization.",
  "Measure KPI improvements (release cadence, recovery objectives, incident MTTR) against migration business case.",
  "Document lessons learned and feed them into the platform roadmap and CCoE playbooks."
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero__body">
          <p className="hero__eyebrow">Migration Playbook</p>
          <h1>AWS Migration Steps</h1>
          <p className="hero__blurb">
            End-to-end checklist for moving enterprise workloads into AWS with
            predictable outcomes, strong governance, and measurable business
            impact.
          </p>
        </div>
      </header>

      <section className="card card--highlight">
        <h2>Executive Snapshot</h2>
        <div className="grid grid--2">
          <div>
            <h3>Objectives</h3>
            <ul>
              <li>Lower total cost of ownership and modernize legacy estates.</li>
              <li>Increase agility with elastic infrastructure and automated deployments.</li>
              <li>Improve security posture with centralized guardrails and continuous monitoring.</li>
            </ul>
          </div>
          <div>
            <h3>Success Metrics</h3>
            <ul>
              <li>Migration completed within agreed RPO/RTO thresholds.</li>
              <li>Post-migration performance at or above baseline benchmarks.</li>
              <li>Cost variance within ±10% of forecast after 90 days.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Migration Phases</h2>
        <div className="timeline">
          {phases.map((phase) => (
            <article key={phase.key} className="timeline__item">
              <div className="timeline__marker" aria-hidden />
              <div className="timeline__content">
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
                <ul>
                  {phase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Readiness Checklist</h2>
        <div className="grid grid--3">
          {readinessChecklist.map((section) => (
            <article key={section.title} className="card card--nested">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Risk Register</h2>
        <div className="grid grid--2">
          {riskMitigations.map((entry) => (
            <article key={entry.risk} className="card card--nested">
              <h3>{entry.risk}</h3>
              <p>{entry.mitigation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Core Tooling</h2>
        <div className="grid grid--2">
          {tools.map((tool) => (
            <article key={tool.name} className="card card--nested">
              <h3>{tool.name}</h3>
              <p>{tool.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Post-Migration Actions</h2>
        <ul>
          {postMigration.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>
          Need deeper guidance? Align your migration backlog with the AWS Cloud
          Adoption Framework and schedule quarterly Well-Architected reviews.
        </p>
      </footer>
    </main>
  );
}
