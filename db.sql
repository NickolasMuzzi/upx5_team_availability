CREATE TABLE "company" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" varchar(255),
    "cnpj" varchar(14),
    "category" varchar(255),
    "forms" varchar(255),
    "created_at" DATE
);

CREATE TABLE "work_regime" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255),
    "created_at" DATE
);

CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" varchar(255),
    "email" varchar(255),
    "password" varchar(255),
    "cpf" varchar(11),
    "companyId" UUID,
    "work_regime" INT,
    "created_at" DATE,
    FOREIGN KEY ("companyId") REFERENCES "company" ("id"),
    FOREIGN KEY ("work_regime") REFERENCES "work_regime" ("id")
);

CREATE TABLE "form" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "title" varchar(255),
    "company_id" UUID,
    "created_at" DATE,
    FOREIGN KEY ("company_id") REFERENCES "company" ("id")
);

CREATE TABLE "questions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "question_text" TEXT,
    "type" varchar(255),
    "created_at" DATE
);

CREATE TABLE "form_questions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "question_id" UUID,
    "form_id" UUID,
    "created_at" DATE,
    FOREIGN KEY ("question_id") REFERENCES "questions" ("id"),
    FOREIGN KEY ("form_id") REFERENCES "form" ("id")
);

CREATE TABLE "answers" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID,
    "form_id" UUID,
    "send_date" DATE,
    "created_at" DATE,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
    FOREIGN KEY ("form_id") REFERENCES "form" ("id")
);
