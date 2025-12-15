import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsHeader } from "@/components/docs-header"
import { TableOfContents } from "@/components/table-of-contents"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="flex flex-1 pt-16">
        <DocsSidebar />
        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex flex-col xl:flex-row xl:gap-12 px-4 sm:px-6 lg:px-8">
              <div className="flex-1 py-6 sm:py-8 lg:py-12 max-w-none xl:max-w-3xl">
                {children}
              </div>
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}