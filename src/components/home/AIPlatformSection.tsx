"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck, GitMerge, Radar, ScrollText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type AIProject = {
  id: string;
  title: string;
  tagline: string;
  proof: string;
  technologies: string[];
  githubLink: string;
  artifactLabel?: string;
  artifactLink?: string;
  Icon: typeof ShieldCheck;
};

const aiProjects: AIProject[] = [
  {
    id: "evalforge",
    title: "EvalForge",
    tagline:
      "Regression-testing CI for LLM features — golden evals, a calibrated LLM-judge, and a merge-blocking quality/cost/latency gate.",
    proof: "A GitHub Action posts a metric-delta comment and turns the PR red on regression.",
    technologies: ["Python", "LLM Evaluation", "RAGAS", "GitHub Actions", "FastAPI"],
    githubLink: "https://github.com/ameydabhade/evalforge",
    artifactLabel: "Red-check PR",
    artifactLink: "https://github.com/ameydabhade/evalforge/pull/1",
    Icon: GitMerge,
  },
  {
    id: "quoteforge",
    title: "QuoteForge",
    tagline:
      "Durable, human-gated LangGraph agent — the LLM proposes intent, a deterministic engine owns every dollar.",
    proof: "Crash → resume from a checkpoint, exactly-once issuance, OWASP guardrails. 173 tests.",
    technologies: ["LangGraph", "Python", "FastAPI", "OWASP guardrails", "SQLite"],
    githubLink: "https://github.com/ameydabhade/quoteforge",
    Icon: ShieldCheck,
  },
  {
    id: "sentinelforge",
    title: "SentinelForge",
    tagline:
      "Unsupervised security threat detection + a durable SOC-triage agent, gated in CI by EvalForge.",
    proof: "SHAP, drift/retrain, tuned MITRE ATT&CK RAG, and a green→red→green retrain-promotion gate.",
    technologies: ["scikit-learn", "PyTorch", "SHAP", "FAISS RAG", "LangGraph", "SageMaker"],
    githubLink: "https://github.com/ameydabhade/sentinelforge",
    Icon: Radar,
  },
  {
    id: "valicred",
    title: "ValiCred-MRM",
    tagline:
      "Independent Model-Validation Copilot (SR 11-7 / OCC 2011-12 lineage) — a statistical validation battery with a Digital Validator agent.",
    proof: "Hash-chained tamper-evident sign-off ledger + a deterministic gate that blocks a hallucinated metric. 181 tests.",
    technologies: ["scikit-learn", "SHAP", "LangGraph", "SQLAlchemy", "Model Risk / SR 11-7"],
    githubLink: "https://github.com/ameydabhade/valicred",
    Icon: ScrollText,
  },
];

export function AIPlatformSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            AI / ML Engineering Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Four composing repos spanning the full applied-LLM lifecycle: offline
            evaluation → CI quality gate → durable agentic runtime → model-risk
            governance. Production-minded, fully test-backed, and honest about its
            limits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <project.Icon className="h-6 w-6 text-primary/80" />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{project.tagline}</p>
                  <p className="text-sm text-foreground/80 mb-4">
                    <span className="font-medium">Proof:</span> {project.proof}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.artifactLink && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.artifactLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.artifactLabel}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
