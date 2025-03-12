
Check out the App - https://flowing-wombat-67.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fhirefy-u5c8.vercel.app%2F

Credentials - username - revengerider922@gmail.com
              password - RevengeRider_12345


```markdown
# Remote Interview Platform 🚀

[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js)](https://nextjs.org/)
[![Convex](https://img.shields.io/badge/Convex-Database-FF6C37)](https://convex.dev/)
[![Stream](https://img.shields.io/badge/Stream-Video_API-F04F8E)](https://getstream.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-4A47B0)](https://clerk.dev/)

A modern platform for conducting technical interviews remotely with real-time collaboration features and video conferencing capabilities.

![Platform Screenshot](./public/screenshot.png) <!-- Add actual screenshot path -->

## Features ✨

- **Role-based Access** (Candidate/Interviewer)
- **Interview Scheduling** with calendar integration
- **Real-time Video Interviews** powered by Stream
- **Collaborative Code Editor** (optional - add if implemented)
- **Authentication & Authorization** using Clerk
- **Interview Dashboard** with upcoming/past sessions
- **Meeting Recording** (optional - add if implemented)
- **Real-time Notifications**

## Tech Stack 🛠️

- **Framework**: Next.js 13+ (App Router)
- **Database**: Convex
- **Authentication**: Clerk
- **Video API**: Stream Video SDK
- **UI**: Shadcn/ui + Tailwind CSS
- **State Management**: React Query
- **Form Handling**: React Hook Form
- **Date Management**: date-fns + react-day-picker

## Getting Started 🚀

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+
- Convex account
- Stream account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/burakorkmez/remote-interview-platform.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure services:
- [Clerk Configuration Guide](https://clerk.dev/docs)
- [Stream Configuration Guide](https://getstream.io/video/docs/)
- [Convex Configuration Guide](https://docs.convex.dev/)

5. Start the development server:
```bash
npm run dev
```

## Configuration 🔧

### Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT_KEY=
NEXT_PUBLIC_STREAM_API_KEY=
```

### Required Services

1. **Clerk**: For user authentication
2. **Stream**: For video interviews
3. **Convex**: For real-time database
4. **Vercel**: For deployment (recommended)

## Usage 📋

1. **Sign Up** as either Candidate or Interviewer
2. **Schedule Interviews** through the dashboard
3. **Join Interviews** via unique meeting links
4. **Conduct Interviews** with real-time video and chat
5. **Review Past Interviews** with session recordings

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgements 🙏

- Shadcn/ui for amazing UI components
- Convex team for real-time database
- Stream for video infrastructure
- Clerk for authentication solutions
```


