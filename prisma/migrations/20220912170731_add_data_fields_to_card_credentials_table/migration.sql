/*
  Warnings:

  - Added the required column `cardName` to the `CardCredentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `CardCredentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isVirtual` to the `CardCredentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `CardCredentials` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CardTypes" AS ENUM ('Debit', 'Credit', 'Debit_and_Credit');

-- AlterTable
ALTER TABLE "CardCredentials" ADD COLUMN     "cardName" TEXT NOT NULL,
ADD COLUMN     "expirationDate" TEXT NOT NULL,
ADD COLUMN     "isVirtual" BOOLEAN NOT NULL,
ADD COLUMN     "type" "CardTypes" NOT NULL;
