---
title: "Question-Generation-System"
collection: projects
permalink: /projects/Question-Generation-System
excerpt: 'SI630 Final Project – University of Michigan, Winter 2024'
paperurl: 'http://erapariharr.github.io/files/Answer-aware-question-generation.pdf'
slidesurl: 'http://erapariharr.github.io/files/eecs598-llms-final-report.pdf'
---


### Project Overview

This project aimed to enhance question generation (QG) systems by focusing on answer-aware question generation—where questions are generated with both the context and answer in mind. Unlike traditional QG methods that rely on short factoid answers, our goal was to diversify the types of questions generated and improve evaluation standards using large language models and advanced metrics. We fine-tuned transformer models (T5-large, BART-large) on an enriched, paraphrased dataset compiled from multiple QA sources, significantly improving generation quality across standard and semantic metrics.

---

### Key Contributions

#### 1. Dataset Construction & Paraphrasing Pipeline - 
- Collected QA pairs from SQuAD 2.0, AdversarialQA, and MS MARCO to construct a diverse dataset of 10,000 training entries.
- Built a custom paraphrasing pipeline using T5_Paraphrase_Paws and BART-Paraphrase models to expand question diversity.
- Applied semantic similarity filtering (MiniLM embeddings) to retain high-quality paraphrased questions (similarity range: 0.96–0.99).

#### 2. Model Training & Optimization - 
- Fine-tuned t5-large and BART-large using two input formats for answer-aware QG:
    - <answer> ai <context> ci
    - answer: ai, context: ci
- Tuned training parameters (batch size, epochs, learning rate) to optimize performance within GPU memory limits.

#### 3. Evaluation Framework - 
- Applied traditional metrics: BLEU, ROUGE-L, METEOR.
- Added semantic-level evaluation using BERTScore and RQUGE, capturing context-answer-question coherence.
- Introduced ChatGPT-3.5 based evaluation with prompt engineering for grammar and semantic alignment scoring.
---

### Key Results
- Fine-tuned T5/BART on paraphrased data outperformed baselines on all traditional metrics (BLEU: 0.099, ROUGE-L: 0.336).
- RQuGE score improved, reflecting stronger alignment between generated questions and context-answer pairs.
- ChatGPT scoring confirmed better grammatical correctness and semantic relevance for the augmented models.

---

### Future Directions
- Apply parameter-efficient fine-tuning methods (e.g., LoRA) to larger models like LLaMA or OPT.
- Extend QG to domain-specific applications (e.g., medical/legal).
- Improve automated evaluation by integrating instruction-tuned evaluators and human-in-the-loop validation.

---

### Conclusion

This project demonstrated that augmenting QA datasets with paraphrased questions and fine-tuning large models leads to more robust and context-aware question generation. My work focused on building the data pipeline, fine-tuning models efficiently, and developing an evaluation strategy that goes beyond surface-level metrics to capture semantic and grammatical quality.
// You can find the **codebase on [GitHub](#)**.

### Resources

- [Download Paper](http://academicpages.github.io/files/Answer-aware-question-generation.pdf)
// - [Download presented Poster](http://academicpages.github.io/files/slides1.pdf)

---
