import Image from 'next/image'

interface Project {
  icon: string
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    icon: '/inks.png',
    title: 'Inks',
    description: 'Follow any websites, convert SNS to RSS',
    url: 'https://inks.page',
  },
  {
    icon: '/noutube.png',
    title: 'NouTube',
    description: 'YouTube and YouTube Music in a single app. No ads',
    url: 'https://github.com/nonbili/NouTube',
  },
  {
    icon: '/nora.png',
    title: 'Nora',
    description: 'Facebook, Instagram, Reddit, Threads and X in a single app. No ads',
    url: 'https://github.com/nonbili/Nora',
  },
]
export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="min-h-screen w-full max-w-3xl py-32 px-4 md:px-16 bg-white dark:bg-black sm:items-start space-y-10 md:space-y-20">
          {projects.map((project, index) => (
            <a
              className="border border-gray-100 rounded-md shadow-md px-2 md:px-4 py-4 flex items-center gap-4"
              href={project.url}
              target="_blank"
              key={index}
            >
              <Image className="shrink-0" src={project.icon} alt={project.title} width={100} height={20} priority />
              <div>
                <h3 className="font-medium text-xl">{project.title}</h3>
                <p className="mt-4">{project.description}</p>
              </div>
            </a>
          ))}
        </main>
      </div>
      <div className="text-center dark:bg-blue-950 bg-blue-50 text-sm py-1">© Nonbili Inc.</div>
    </>
  )
}
