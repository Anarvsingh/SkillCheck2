
Check out the App - https://flowing-wombat-67.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fhirefy-u5c8.vercel.app%2F

Credentials - username - revengerider922@gmail.com
              password - RevengeRider_12345

[Home Page](1.png)

[Meeting Room](2.png)

[Code Editor](3.png)

[Meeting Schedule](4.png)



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


