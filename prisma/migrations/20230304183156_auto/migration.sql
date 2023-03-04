-- CreateTable
CREATE TABLE "tokens" (
    "guid_token" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "users_guid" TEXT NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("guid_token")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_users_guid_fkey" FOREIGN KEY ("users_guid") REFERENCES "user"("guid_user") ON DELETE RESTRICT ON UPDATE CASCADE;
