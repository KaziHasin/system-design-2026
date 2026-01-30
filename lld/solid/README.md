# SOLID Principles

## Overview

**SOLID** is a set of five object-oriented design principles that help developers write code that is:

- Easy to understand
- Easy to maintain
- Easy to extend
- Easy to test

Although originally proposed for **object-oriented programming**, SOLID principles are widely used in modern software development, including **agile** and **adaptive** methodologies.

The principles were introduced by **Robert C. Martin (Uncle Bob)**, and the acronym **SOLID** was later coined by **Michael Feathers**.

---

## What does SOLID stand for?

| Letter | Principle |
|------|----------|
| S | Single Responsibility Principle |
| O | Open–Closed Principle |
| L | Liskov Substitution Principle |
| I | Interface Segregation Principle |
| D | Dependency Inversion Principle |

---

## 1️⃣ Single Responsibility Principle (SRP)

> **A class should have only one reason to change.**

### Meaning
Each class should focus on **one responsibility** and do it well.

### Why it matters
- ✅ Easier to maintain
- ✅ Easier to test
- ✅ Changes don’t affect unrelated functionality

### Example (conceptual)
Instead of one class handling **business logic + logging**, split them into separate classes.

---

## 2️⃣ Open–Closed Principle (OCP)

> **Software entities should be open for extension, but closed for modification.**

### Meaning
You should be able to **add new behavior** without changing existing code.

### Why it matters
- ✅ Reduces bugs in stable code
- ✅ Makes systems extensible
- ✅ Encourages polymorphism

### Common techniques
- Interfaces
- Abstract classes
- Strategy pattern

---

## 3️⃣ Liskov Substitution Principle (LSP)

> **Subtypes must be substitutable for their base types without altering correctness.**

### Meaning
A subclass should behave in a way that **does not break expectations** set by the base class.

### Why it matters
- ✅ Reliable polymorphism
- ✅ Predictable behavior
- ✅ Strong contracts between classes

### Rule of thumb
If replacing a base class with a subclass causes bugs → **LSP is violated**

---

## 4️⃣ Interface Segregation Principle (ISP)

> **Clients should not be forced to depend on interfaces they do not use.**

### Meaning
Prefer **small, focused interfaces** over large, general ones.

### Why it matters
- ✅ Reduced coupling
- ✅ Cleaner implementations
- ✅ More flexible designs

### Example
Instead of one large `DocumentManager`, split it into:
- `Printable`
- `Scannable`
- `Storable`

---

## 5️⃣ Dependency Inversion Principle (DIP)

> **Depend on abstractions, not on concrete implementations.**

### Meaning
High-level modules should not depend on low-level modules directly.  
Both should depend on **interfaces or abstractions**.

### Why it matters
- ✅ Loose coupling
- ✅ Easier testing (mocking)
- ✅ Easier replacement of implementations

### Common usage
- Dependency Injection
- Interfaces / abstract classes

---

## Why SOLID is Important

Applying SOLID principles leads to:

- Better code readability
- Easier refactoring
- Scalable architecture
- Cleaner separation of concerns
- Improved long-term maintainability

---

## Final Note

SOLID is **not about writing more code**,  
it’s about writing **better-structured code** that survives change.

> “Good architecture makes the system easy to understand, easy to develop, easy to maintain, and easy to deploy.”  
— Robert C. Martin

---

## References

- Robert C. Martin – *Design Principles and Design Patterns*
- Wikipedia – SOLID Principles
