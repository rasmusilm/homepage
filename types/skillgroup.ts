import type { SkillIcon } from "./skillicon"

export interface SkillGroup {
    title: string,
    skillIcons: Array<SkillIcon>
    paragraphs?: Array<string>
    text?: string
}