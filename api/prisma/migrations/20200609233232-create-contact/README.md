# Migration `20200609233232-create-contact`

This migration has been generated by Didier Berlioz at 6/9/2020, 11:32:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Contact" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"message" TEXT NOT NULL  ,"name" TEXT NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200531212932-create-post..20200609233232-create-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -14,4 +14,12 @@
   body  String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id  Int @id @default(autoincrement())
+  name String
+  email  String
+  message  String
+  createdAt DateTime @default(now())
+}
```


