# AdamsBrain: Product Requirements Document

**Scope:** Milestone 1 (Tutor Alpha)
**Product:** AdamsBrain, an adaptive practice engine for NY Regents Algebra 1. Tutor persona: Mr. Adams.
**Author:** Ahmed
**Last updated:** 16 September 2026
**Status:** Draft. Five sections carry open questions (see section 13).

---

## 1. One sentence

AdamsBrain is a web app that helps students retaking the NY Algebra 1 Regents exam pass it, by giving them scaffolded practice problems that reduce support as they improve.

---

## 2. The problem

When these students get stuck at home, they stop. They do not look the topic up, ask a friend, or try a different approach. They put the work down and open something else. A few have a parent who could help, but that is not reliable and not most of them.

Stopping is the problem, not the being stuck. A student who abandons a question learns nothing from it, and the gap carries into the next topic, which in Algebra 1 is usually built on the one before it. Over a year this compounds into failing the exam.

What works in my classroom is fading worksheets: a worked example, then the same problem type with blanks, then one with no support. Weak students are not overwhelmed because they always have something to hold onto, and stronger students are not bored because the support disappears as soon as they stop needing it. AdamsBrain is that method, made adaptive and available at 9pm.

---

## 3. The user

**Student S01.** 17, grade 11, sat the Algebra 1 Regents in June 2026 and failed.

- **Device:** school-issued Chromebook, on school wifi. Data cost is not a constraint.
- **Study time:** roughly 2 hours a day, split between school and home.
- **The gap:** effort and confidence more than ability. **Unverified.** See OQ-1.
- **Why they failed:** currently assumed to be insufficient practice. **Unverified.** An item analysis of the 11 June papers will replace this assumption with evidence. See OQ-1.
- **Voluntary use:** unknown. Whether these students open the app without being assigned to is the single biggest risk in this project. See OQ-2.

**Cohort note.** v1 serves the 11 January retakers. The engine must serve first-time takers without modification, so scaffold level is always driven by estimated mastery and never by a hardcoded assumption that every student begins at zero.

---

## 4. What M1 does

1. As a student, I can log in.
2. As a student, I can see practice questions at the right scaffold level for my current mastery.
3. As a student, I can submit an answer and get immediate feedback.
4. As a student, when I get something wrong, I can see a step-by-step explanation for that specific question.

Item 4 is where the AI sits in M1: a bounded generation task against a question whose correct answer the system already holds, which makes it evaluable.

---

## 5. Explicitly out of scope for M1

- Student analytics or progress dashboard
- Free-form chat with the tutor (M2, scoped to a specific item)
- Algebra 1 topics outside the three clusters
- Calculator methods, which will be curated data rather than generated
- Teacher dashboard
- The other 80 Regents students at the school
- WASSCE content pack, general Algebra 1
- Native mobile app, payments, parent accounts

---

## 6. The core principle

The tutor scaffolds and fades based on estimated mastery.

**Three levels.**
- **Full scaffold:** the question is worked through step by step to a final answer. The student studies it.
- **Half scaffold:** the same problem type with the steps present but gaps to fill in.
- **No scaffold:** the question alone.

**Movement.** A student who answers correctly at their current level repeatedly moves up a level, meaning less support. A student who answers incorrectly repeatedly moves back down. When a student is answering no-scaffold questions correctly, they have finished the skill and move to the next one.

**Thresholds, provisional.** Promote after 3 consecutive correct. Demote after 2 consecutive wrong. A single wrong answer does not demote, because one error is usually a slip rather than a gap, and for a cohort whose main deficit is confidence, being pushed backwards for one mistake reads as punishment. These two numbers are a starting guess and will change once there is real data, so they are stored as configuration values and never hardcoded.

---

## 7. Content and the engine

**Three clusters:** linear equations, functions, quadratics.

Chosen because they form a prerequisite chain rather than three separate areas: solving linear equations feeds function notation and graphing, which feeds quadratics. That structure lets evidence about one skill inform estimates about a related one, which matters when there are only 11 students generating data. Quadratics also suits scaffolding well, being a fixed multi-step procedure. **Provisional:** to be checked against the NYSED exam blueprint and against what the 11 students actually got wrong in June. See OQ-1.

**Content as swappable data.** Regents items are stored as rows, not written into the code. An item carries its question, its correct answer, its scaffold level, and the skill it belongs to. The engine knows how to select and sequence items; it knows nothing about Regents specifically. A WASSCE or general Algebra 1 pack is then a new set of rows against the same schema, with no engine change.

**What a skill is.** A skill is the level at which you would give different instruction. If two things need the same reteach, they are one skill. Too coarse and the system cannot adapt, because "quadratics mastered" says nothing about factoring in particular. Too fine and 11 students never generate enough attempts per skill for a mastery estimate to mean anything.

Working rule: a skill is something teachable in one 40-minute period, with roughly 8 practice items behind it. Target: 10 to 15 skills across the three clusters. Skills are tagged with standard taxonomy codes rather than Regents-only labels, so the same content is legible to any Algebra 1 curriculum later. **Final grain to be set in Session 3.** See OQ-3.

---

## 8. Permissions and data

**Design principle: collect so little that the legal surface shrinks.**

Proposed, pending approval:
- Students log in with an anonymous code, S01 to S11. The mapping from code to real student is kept on paper, in the classroom, never in the system.
- No names, no emails, no student IDs, no free-text fields that could contain personal information.
- What reaches the external AI provider is a maths item and an anonymous attempt record. Nothing identifying.

**Unresolved:** the school's approval process, what US and NY student data rules apply, and what students and parents are told. FERPA is relevant, and NY Education Law section 2-d may be, but neither has been verified. The plan is not to arrive with a legal theory but to describe what the system does and what data it touches, and ask the school what process applies. See OQ-4 and OQ-5.

No student touches this system before that approval exists.

---

## 9. Licensing

**Source:** NYSED Terms of Use, https://www.nysed.gov terms-of-use (accessed 16 September 2026).

**Granted:** permission to copy, use and distribute NYSED-created materials without fee for personal, private and educational purposes.

**Forbidden:** reproducing materials for profit or any commercial use, without express prior written permission from NYSED. Requests go to legal@nysed.gov.


**Not covered:** material on the NYSED site that is credited to other sources.

**Implication for M1:** a free tool used by 11 students in my own classroom falls inside the educational grant. Every item displayed must carry the attribution above.

**Implication beyond M1:** any paid version, school contract or commercial licensing requires written permission first. This is a hard gate on the project ever becoming a business, so permission must be sought early rather than assumed.

**Design consequence:** each item record stores its source exam and administration date, so attribution can be rendered automatically rather than added by hand.

---

## 10. Success criteria

**Milestone 1 is done when the app is deployed, approved for pilot use, and the 11 students have used it unsupervised.**

M1 is measured on the tool, not on exam results. Because these students are taught daily by the same person who built the app (myself), a January pass rate cannot be attributed to the app. Exam outcomes are M2 evidence at best.

- **Primary signal:** number of students who open the app outside class without being told to, over two weeks.
- **Correctness signal:** the proportion of generated explanations that are mathematically correct, scored by hand against a set of items with known answers.
- **Failure signal, to be defined.** See OQ-7.

---

## 11. Constraints

- Budget: USD 20 to 50 per month, all in
- Team: one person, learning to build while teaching full time
- Capacity: about 4 sessions per week
- Deployment: web only, PWA, targeting school Chromebooks
- Fixed external date: January Regents administration, 26 to 29 January 2027

---

## 12. Assumptions

Each of these is a risk, not a fact.

1. Students will open the app outside class. **Highest risk in the project.** The stated gap is effort and confidence, and a tool that is never opened fixes neither.
2. Students will read a full-scaffold worked example rather than skipping to the answer.
3. Students will trust a computer's maths explanation.
4. Fading worksheets, which work on paper in a supervised classroom, will work unsupervised on a screen.
5. The scaffold thresholds in section 6 are approximately right.

---

## 13. Open questions

| # | Question | Owner | By when |
|---|----------|-------|---------|
| OQ-1 | Item analysis of the 11 June Regents papers: which skills actually failed, and does that confirm the three clusters? | Ahmed | Before Session 3 |
| OQ-2 | Will students use this voluntarily, or must it be assigned? | Ahmed, by asking them | Before Session 8 |
| OQ-3 | Final skill grain and taxonomy codes: how many skills, tagged how? | Ahmed with Claude | Session 3 |
| OQ-4 | What is the school's approval process for a third-party educational tool? | Ahmed, via Dean Bektas | Before Session 8 |
| OQ-5 | Which student data rules apply, and what must students and parents be told? | School, once asked | Before any student use |
| OQ-6 | Written confirmation from legal@nysed.gov on commercial use, | Ahmed, primary source | Before Session 8 |
| OQ-7 | What result would tell me this is not working and I should change direction? | Ahmed | Session 3 |