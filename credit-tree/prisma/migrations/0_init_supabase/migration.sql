-- CreateTable
CREATE TABLE "user-data" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "profile_image" SMALLINT DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user-data_pkey" PRIMARY KEY ("id")
);

