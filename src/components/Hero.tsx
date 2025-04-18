        <div className="container py-24 md:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m Amey Dabhade
                </h1>
                <p className="text-xl text-muted-foreground">
                  Full Stack Developer specializing in building modern web applications with React, Next.js, and Node.js
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#contact"
                  className={buttonVariants({
                    size: "lg",
                  })}
                >
                  Contact Me
                </Link>
                <Link
                  href="https://github.com/ameydabhade"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div> 