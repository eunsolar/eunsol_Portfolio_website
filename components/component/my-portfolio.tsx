import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <GamepadIcon className="h-6 w-6" />
            <span>Game Designer</span>
          </Link>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="hidden h-full w-64 flex-col border-r bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:flex">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage alt="Game Designer" src="/placeholder-avatar.jpg" />
              <AvatarFallback>GD</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <div className="font-semibold">Eunsol Kim</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Game Designer</div>
            </div>
          </div>
          <div className="mt-8 flex flex-1 flex-col gap-4">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#Portfolio"
            >
              <GalleryThumbnailsIcon className="h-4 w-4" />
              <span>Portfolio</span>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#Experience"
            >
              <BriefcaseIcon className="h-4 w-4" />
              <span>Experience</span>
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#Contact"
            >
              <MailIcon className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </nav>
        <main className="flex-1 overflow-auto">
          <section className="p-6 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage alt="Game Designer" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>GD</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-semibold">Eunsol Kim </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Game Designer</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    I am a passionate game designer with a strong background in creating engaging and immersive gaming
                    experiences. My portfolio showcases a variety of projects I have worked on, ranging from mobile
                    games to console titles. I am constantly exploring new technologies and design techniques to push
                    the boundaries of what is possible in the gaming industry.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gray-200 bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold" id="Portfolio">Portfolio</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <img
                    alt="Game Screenshot"
                    className="aspect-video rounded-lg object-cover"
                    height={300}
                    src="/PORT-1.jpg"
                    width={400}
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">With Us</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A casual mobile game with a unique art style and engaging gameplay. It is a mystery mystery game that combines online mafia and investigation. Users are divided into mafia, police, and citizens to win if they break a quest that meets their mission.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <img
                    alt="Game Screenshot"
                    className="aspect-video rounded-lg object-cover"
                    height={300}
                    src="/PORT-3.jpg"
                    width={400}
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Ready to forest </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A story-driven console game with a focus on exploration and character development. Dig into the secrets that happened in the forest. Gather your colleagues and fight and solve the events that happened in the forest. It's a log-like type of game, and it's a change RPG game where skills change based on the combination of your colleagues.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <img
                    alt="Game Screenshot"
                    className="aspect-video rounded-lg object-cover"
                    height={300}
                    src="/PORT-2.jpg"
                    width={400}
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">My puppy friend</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    It is a game of raising a fictional dog. Users can raise a variety of dogs they want and enjoy raising realistic pets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gray-200 bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold" id="Experience">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Game Designer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Acme Game Studio, 2018 - Present</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Responsible for designing and implementing innovative gameplay mechanics, creating engaging
                    narratives, and collaborating with cross-functional teams to bring game concepts to life.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Game Design Intern</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gamedev Studios, 2017 - 2018</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gained hands-on experience in game design, prototyping, and playtesting. Contributed to the
                    development of multiple mobile and web-based games.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Bachelor of Arts in Game Design, University of Creative Studies, 2014 - 2017
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Studied the principles of game design, storytelling, and interactive media. Completed a senior
                    project focused on developing an educational game for children.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gray-200 bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-950 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold" id="Contact">Contact</h2>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to reach out to me for any inquiries or collaboration opportunities. You can contact me
                  via email or connect with me on LinkedIn.
                </p>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">eunsol.kim@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">linkedin.com/in/eunsol-kim</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function GalleryThumbnailsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </svg>
  )
}


function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
