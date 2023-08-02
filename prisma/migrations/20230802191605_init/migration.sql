-- CreateTable
CREATE TABLE "users" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "nickname" STRING,
    "password" STRING NOT NULL,
    "email_Verified" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publisherId" STRING NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_publisherId_key" ON "Product"("publisherId");
