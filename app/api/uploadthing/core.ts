import { createUploadthing, type FileRouter } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { uploadedFiles } from "@/lib/schema";

const f = createUploadthing();

export const ourFileRouter = {
  memoryUpload: f({
    image: { maxFileSize: "16GB", maxFileCount: 4 },
    video: { maxFileSize: "16GB", maxFileCount: 2 },
    text: { maxFileSize: "1MB", maxFileCount: 5 },
    pdf: { maxFileSize: "8MB", maxFileCount: 3 },
  })
    .middleware(async () => {
      const user = await auth();
      const userId = user?.userId;
      const orgId = user?.orgId ?? null;

      if (!userId || !orgId) {
        throw new Error("Unauthorized");
      }

      return { userId, orgId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(uploadedFiles).values({
        fileKey: file.key,
        name: file.name,
        size: file.size,
        type: file.type,
        userId: metadata.userId,
        orgId: metadata.orgId,
        createdAt: new Date(),
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

