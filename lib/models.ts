export interface Font {
  family: string
  variants: string[]
  subsets: string[]
  files: Record<string, string>
  category: string
}
