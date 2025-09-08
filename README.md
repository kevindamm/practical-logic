# practical-logic: <br> CLP(FD) exploratory, <br> with OCaml->JavaScript

Constraint-Logic Programming over Finite Domains using tricks of the trade
developed through self-study of the textbook
"Handbook of Practical Logic and Automated Reasoning" by John Harrison
([goodreads](https://www.goodreads.com/book/show/7475215))
and various related research papers, as cited throughout.

Progress through the book is marked by separate branches for the content of
each chapter, with additional subordinate branches for each exercise
completed (with a writeup in the root README and additional code as appropiate
for the exercise).
You may choose to follow along with your own progress in the book, or select
a particular section of interest, and easily see the diff between it and its
predecessor, or to try alternate design paths from certain early points in the
book.  The following table of contents links to the relevant branches for
completed sections and exercises.

The code here deviates from that in the book, and the `main` branch will often
elide or modify significant parts of the original source code.  Sometimes this
is done simply to my taste and sometimes it is in service of the
[interactive solver](https://kevindamm.github.io/practical-logic)
made available as a web application
  via [`js_of_ocaml`](https://github.com/ocsigen/js_of_ocaml)
  and [*Vitepress*](https://vitepress.dev/)
  and hosted on [GitHub Pages](https://docs.github.com/pages).


1. Introduction

    * [ch 1.1-1.8](https://github.com/kevindamm/practical-logic/blob/ch1/Summary.md)

      This section is represented within one branch due to the relative simplicity
      of the introductory chapters.
      The code at this point is a simple parser in OCaml for evaluating arithmetic
      and boolean expressions.\
      TODO: using js_of_ocaml to integrate with a dynamic web page representation

2. Propositional Logic

    * ch2.1 The syntax of propositional logic
    * ch2.2 The semantics of propositional logic
    * ch2.3 Validity, satisfiability and tautology
    * ch2.4 The De Morgan laws, adequacy and duality
    * ch2.5 Simplification and negation normal form
    * ch2.6 Disjunctive and conjunctive normal forms
    * ch2.7 Applications of propositional logic
    * ch2.8 Definitional CNF
    * ch2.9 The Davis&ndash;Putnam procedure
    * ch2.10 St&aring;lmark's method
    * ch2.11 Binary decision diagrams
    * ch2.12 Compactness

3. First-order logic

    * ch3.1 First-order logic and its implementation
    * ch3.2 Parsing and printing
    * ch3.3 The semantics of first-order logic
    * ch3.4 Syntax operations
    * ch3.5 Prenex normal form
    * ch3.6 Skolemization
    * ch3.7 Canonical models
    * ch3.8 Mechanizing Herbrand's theorem
    * ch3.9 Unification
    * ch3.10 Tableaux
    * ch3.11 Resolution
    * ch3.12 Subsumption and replacement
    * ch3.13 Refinements of resolution
    * ch3.14 Horn clauses and Prolog
    * ch3.15 Model elimination
    * ch3.16 More first-order metatheorems

4. Equality

    * ch4.1 Equality axioms
    * ch4.2 Categoricity and elementary equivalence
    * ch4.3 Equational logic and completeness theorems
    * ch4.4 Congruence closure
    * ch4.5 Rewriting
    * ch4.6 Termination orderings
    * ch4.7 Knuth&ndash;Bendix completion
    * ch4.8 Equality elimination
    * ch4.9 Paramodulation

5. Decidable problems

    * ch5.1 The decision problem
    * ch5.2 The AE fragment
    * ch5.3 Miniscoping and the monadic fragment
    * ch5.4 Syllogisms
    * ch5.5 The finite model property
    * ch5.6 Quantifier elimination
    * ch5.7 Presburger arithmetic
    * ch5.8 The complex numbers
    * ch5.9 The real numbers
    * ch5.10 Rings, ideals and word problems
    * ch5.11 Gr&ouml;bner bases
    * ch5.12 Geometric theorem proving
    * ch5.13 Combining decision procedures
  
6. Interactive theorem proving

    * ch6.1 Human-oriented methods
    * ch6.2 Interactive provers and proof checkers
    * ch6.3 Proof systems for first-order logic
    * ch6.4 LCF implementation of first-order logic
    * ch6.5 Propositional derived rules
    * ch6.6 Proving tautologies by inference
    * ch6.7 First-order derived rules
    * ch6.8 First-order proof by inference
    * ch6.9 Interactive proof styles

7. Limitations

    * ch7.1 Hilbert's programme
    * ch7.2 Tarski's theorem on the undefinability of truth
    * ch7.3 Incompleteness of axiom systems
    * ch7.4 G&ouml;del's incompleteness theorem
    * ch7.5 Definability and decidability
    * ch7.6 Church's theorem
    * ch7.7 Further limitative results
    * ch7.8 Retrospective: the nature of logic

["Practical Logic & Automated Reasoning" notebook](https://github.com/kevindamm/practical-logic)\
© 2025 by [Kevin Damm](https://github.com/kevindamm)\
is licensed under
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
![Creative Commons](https://mirrors.creativecommons.org/presskit/icons/cc.svg)
![Attribution](https://mirrors.creativecommons.org/presskit/icons/by.svg)
![NonCommercial](https://mirrors.creativecommons.org/presskit/icons/nc.svg)
![NoDerivatives](https://mirrors.creativecommons.org/presskit/icons/nd.svg)

<style>
img {
  max-width: 1em;
  max-height: 1em;
  margin-left: .2em;
}
</style>
