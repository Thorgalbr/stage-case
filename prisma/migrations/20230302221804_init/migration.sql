-- CreateTable
CREATE TABLE "user" (
    "guid_user" TEXT NOT NULL,
    "firstName" VARCHAR(75) NOT NULL,
    "lastName" VARCHAR(75) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "role_guid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("guid_user")
);

-- CreateTable
CREATE TABLE "permission" (
    "guid_permission" TEXT NOT NULL,
    "permTitle" VARCHAR(75) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatetAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("guid_permission")
);

-- CreateTable
CREATE TABLE "role" (
    "guid_role" TEXT NOT NULL,
    "roleTitle" VARCHAR(75) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("guid_role")
);

-- CreateTable
CREATE TABLE "role_permission" (
    "guid_role_perm" TEXT NOT NULL,
    "permission_guid" TEXT NOT NULL,
    "role_guid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_permission_pkey" PRIMARY KEY ("guid_role_perm")
);

-- CreateTable
CREATE TABLE "departments" (
    "guid_dept" TEXT NOT NULL,
    "deptName" VARCHAR(75) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("guid_dept")
);

-- CreateTable
CREATE TABLE "employees" (
    "guid_employee" TEXT NOT NULL,
    "firstName" VARCHAR(75) NOT NULL,
    "lastName" VARCHAR(75) NOT NULL,
    "birthDate" DATE NOT NULL,
    "hire_date" DATE NOT NULL,
    "user_guid" TEXT NOT NULL,
    "salary_guid" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("guid_employee")
);

-- CreateTable
CREATE TABLE "dept_emp" (
    "guid_dept_emp" TEXT NOT NULL,
    "dept_guid" TEXT NOT NULL,
    "emp_guid" TEXT NOT NULL,
    "from_date" DATE NOT NULL,
    "to_date" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dept_emp_pkey" PRIMARY KEY ("guid_dept_emp")
);

-- CreateTable
CREATE TABLE "salary" (
    "guid_salary" TEXT NOT NULL,
    "salary" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salary_pkey" PRIMARY KEY ("guid_salary")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_guid_fkey" FOREIGN KEY ("role_guid") REFERENCES "role"("guid_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_permission_guid_fkey" FOREIGN KEY ("permission_guid") REFERENCES "permission"("guid_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_role_guid_fkey" FOREIGN KEY ("role_guid") REFERENCES "role"("guid_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "user"("guid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_salary_guid_fkey" FOREIGN KEY ("salary_guid") REFERENCES "salary"("guid_salary") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dept_emp" ADD CONSTRAINT "dept_emp_dept_guid_fkey" FOREIGN KEY ("dept_guid") REFERENCES "departments"("guid_dept") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dept_emp" ADD CONSTRAINT "dept_emp_emp_guid_fkey" FOREIGN KEY ("emp_guid") REFERENCES "employees"("guid_employee") ON DELETE RESTRICT ON UPDATE CASCADE;
