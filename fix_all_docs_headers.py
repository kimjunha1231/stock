import sys

path = "docs/architecture-and-tech-stack.md"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace(
    "| 기술 스택 | 필요성 & 개발 기능 | 비교 대안 및 선택 이유 | 트레이드오프 (Trade-off) |",
    "| 기술 스택 | 무엇을 하는가? (주요 역할 & 기능) | 핵심 장점 (Key Benefits) | 비교 대안 & 트레이드오프 |"
)

text = text.replace("필요성 & 개발 기능", "무엇을 하는가? (주요 역할 & 기능)")
text = text.replace("비교 대안 및 선택 이유", "핵심 장점 (Key Benefits)")
text = text.replace("트레이드오프 (Trade-off)", "비교 대안 & 트레이드오프")

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Updated docs/architecture-and-tech-stack.md headers completely!")
