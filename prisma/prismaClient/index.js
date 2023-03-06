
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\prismaClient",
    "prismaClient",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DepartmentsScalarFieldEnum = makeEnum({
  guid_dept: 'guid_dept',
  deptName: 'deptName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.Dept_empScalarFieldEnum = makeEnum({
  guid_dept_emp: 'guid_dept_emp',
  dept_guid: 'dept_guid',
  emp_guid: 'emp_guid',
  from_date: 'from_date',
  to_date: 'to_date',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EmployeesScalarFieldEnum = makeEnum({
  guid_employee: 'guid_employee',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  hire_date: 'hire_date',
  user_guid: 'user_guid',
  salary_guid: 'salary_guid',
  createdBy: 'createdBy'
});

exports.Prisma.PermissionScalarFieldEnum = makeEnum({
  guid_permission: 'guid_permission',
  permTitle: 'permTitle',
  createdAt: 'createdAt',
  updatetAt: 'updatetAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  guid_role: 'guid_role',
  roleTitle: 'roleTitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  user_guid: 'user_guid'
});

exports.Prisma.Role_permissionScalarFieldEnum = makeEnum({
  guid_role_perm: 'guid_role_perm',
  permission_guid: 'permission_guid',
  role_guid: 'role_guid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SalaryScalarFieldEnum = makeEnum({
  guid_salary: 'guid_salary',
  salary: 'salary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TokensScalarFieldEnum = makeEnum({
  guid_token: 'guid_token',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  users_guid: 'users_guid'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  guid_user: 'guid_user',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  user: 'user',
  tokens: 'tokens',
  permission: 'permission',
  role: 'role',
  role_permission: 'role_permission',
  departments: 'departments',
  employees: 'employees',
  dept_emp: 'dept_emp',
  salary: 'salary'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"user\",\"dbName\":null,\"fields\":[{\"name\":\"guid_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"employees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employees\",\"relationName\":\"employeesTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tokens\",\"relationName\":\"tokensTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"role\",\"relationName\":\"roleTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tokens\",\"dbName\":null,\"fields\":[{\"name\":\"guid_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"users_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"tokensTouser\",\"relationFromFields\":[\"users_guid\"],\"relationToFields\":[\"guid_user\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"permission\",\"dbName\":null,\"fields\":[{\"name\":\"guid_permission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatetAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"role_permission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"role_permission\",\"relationName\":\"permissionTorole_permission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"role\",\"dbName\":null,\"fields\":[{\"name\":\"guid_role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"roleTouser\",\"relationFromFields\":[\"user_guid\"],\"relationToFields\":[\"guid_user\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_permission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"role_permission\",\"relationName\":\"roleTorole_permission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"role_permission\",\"dbName\":null,\"fields\":[{\"name\":\"guid_role_perm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"permission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"permission\",\"relationName\":\"permissionTorole_permission\",\"relationFromFields\":[\"permission_guid\"],\"relationToFields\":[\"guid_permission\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"role\",\"relationName\":\"roleTorole_permission\",\"relationFromFields\":[\"role_guid\"],\"relationToFields\":[\"guid_role\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"departments\",\"dbName\":null,\"fields\":[{\"name\":\"guid_dept\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"dept_emp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dept_emp\",\"relationName\":\"departmentsTodept_emp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"employees\",\"dbName\":null,\"fields\":[{\"name\":\"guid_employee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hire_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept_emp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dept_emp\",\"relationName\":\"dept_empToemployees\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"salary\",\"relationName\":\"employeesTosalary\",\"relationFromFields\":[\"salary_guid\"],\"relationToFields\":[\"guid_salary\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"employeesTouser\",\"relationFromFields\":[\"user_guid\"],\"relationToFields\":[\"guid_user\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"dept_emp\",\"dbName\":null,\"fields\":[{\"name\":\"guid_dept_emp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dept_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emp_guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"departments\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"departments\",\"relationName\":\"departmentsTodept_emp\",\"relationFromFields\":[\"dept_guid\"],\"relationToFields\":[\"guid_dept\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employees\",\"relationName\":\"dept_empToemployees\",\"relationFromFields\":[\"emp_guid\"],\"relationToFields\":[\"guid_employee\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"salary\",\"dbName\":null,\"fields\":[{\"name\":\"guid_salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"employees\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"employees\",\"relationName\":\"employeesTosalary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"user\",\"plural\":\"users\",\"findUnique\":\"findUniqueuser\",\"findUniqueOrThrow\":\"findUniqueuserOrThrow\",\"findFirst\":\"findFirstuser\",\"findFirstOrThrow\":\"findFirstuserOrThrow\",\"findMany\":\"findManyuser\",\"create\":\"createOneuser\",\"createMany\":\"createManyuser\",\"delete\":\"deleteOneuser\",\"update\":\"updateOneuser\",\"deleteMany\":\"deleteManyuser\",\"updateMany\":\"updateManyuser\",\"upsert\":\"upsertOneuser\",\"aggregate\":\"aggregateuser\",\"groupBy\":\"groupByuser\"},{\"model\":\"tokens\",\"plural\":\"tokens\",\"findUnique\":\"findUniquetokens\",\"findUniqueOrThrow\":\"findUniquetokensOrThrow\",\"findFirst\":\"findFirsttokens\",\"findFirstOrThrow\":\"findFirsttokensOrThrow\",\"findMany\":\"findManytokens\",\"create\":\"createOnetokens\",\"createMany\":\"createManytokens\",\"delete\":\"deleteOnetokens\",\"update\":\"updateOnetokens\",\"deleteMany\":\"deleteManytokens\",\"updateMany\":\"updateManytokens\",\"upsert\":\"upsertOnetokens\",\"aggregate\":\"aggregatetokens\",\"groupBy\":\"groupBytokens\"},{\"model\":\"permission\",\"plural\":\"permissions\",\"findUnique\":\"findUniquepermission\",\"findUniqueOrThrow\":\"findUniquepermissionOrThrow\",\"findFirst\":\"findFirstpermission\",\"findFirstOrThrow\":\"findFirstpermissionOrThrow\",\"findMany\":\"findManypermission\",\"create\":\"createOnepermission\",\"createMany\":\"createManypermission\",\"delete\":\"deleteOnepermission\",\"update\":\"updateOnepermission\",\"deleteMany\":\"deleteManypermission\",\"updateMany\":\"updateManypermission\",\"upsert\":\"upsertOnepermission\",\"aggregate\":\"aggregatepermission\",\"groupBy\":\"groupBypermission\"},{\"model\":\"role\",\"plural\":\"roles\",\"findUnique\":\"findUniquerole\",\"findUniqueOrThrow\":\"findUniqueroleOrThrow\",\"findFirst\":\"findFirstrole\",\"findFirstOrThrow\":\"findFirstroleOrThrow\",\"findMany\":\"findManyrole\",\"create\":\"createOnerole\",\"createMany\":\"createManyrole\",\"delete\":\"deleteOnerole\",\"update\":\"updateOnerole\",\"deleteMany\":\"deleteManyrole\",\"updateMany\":\"updateManyrole\",\"upsert\":\"upsertOnerole\",\"aggregate\":\"aggregaterole\",\"groupBy\":\"groupByrole\"},{\"model\":\"role_permission\",\"plural\":\"role_permissions\",\"findUnique\":\"findUniquerole_permission\",\"findUniqueOrThrow\":\"findUniquerole_permissionOrThrow\",\"findFirst\":\"findFirstrole_permission\",\"findFirstOrThrow\":\"findFirstrole_permissionOrThrow\",\"findMany\":\"findManyrole_permission\",\"create\":\"createOnerole_permission\",\"createMany\":\"createManyrole_permission\",\"delete\":\"deleteOnerole_permission\",\"update\":\"updateOnerole_permission\",\"deleteMany\":\"deleteManyrole_permission\",\"updateMany\":\"updateManyrole_permission\",\"upsert\":\"upsertOnerole_permission\",\"aggregate\":\"aggregaterole_permission\",\"groupBy\":\"groupByrole_permission\"},{\"model\":\"departments\",\"plural\":\"departments\",\"findUnique\":\"findUniquedepartments\",\"findUniqueOrThrow\":\"findUniquedepartmentsOrThrow\",\"findFirst\":\"findFirstdepartments\",\"findFirstOrThrow\":\"findFirstdepartmentsOrThrow\",\"findMany\":\"findManydepartments\",\"create\":\"createOnedepartments\",\"createMany\":\"createManydepartments\",\"delete\":\"deleteOnedepartments\",\"update\":\"updateOnedepartments\",\"deleteMany\":\"deleteManydepartments\",\"updateMany\":\"updateManydepartments\",\"upsert\":\"upsertOnedepartments\",\"aggregate\":\"aggregatedepartments\",\"groupBy\":\"groupBydepartments\"},{\"model\":\"employees\",\"plural\":\"employees\",\"findUnique\":\"findUniqueemployees\",\"findUniqueOrThrow\":\"findUniqueemployeesOrThrow\",\"findFirst\":\"findFirstemployees\",\"findFirstOrThrow\":\"findFirstemployeesOrThrow\",\"findMany\":\"findManyemployees\",\"create\":\"createOneemployees\",\"createMany\":\"createManyemployees\",\"delete\":\"deleteOneemployees\",\"update\":\"updateOneemployees\",\"deleteMany\":\"deleteManyemployees\",\"updateMany\":\"updateManyemployees\",\"upsert\":\"upsertOneemployees\",\"aggregate\":\"aggregateemployees\",\"groupBy\":\"groupByemployees\"},{\"model\":\"dept_emp\",\"plural\":\"dept_emps\",\"findUnique\":\"findUniquedept_emp\",\"findUniqueOrThrow\":\"findUniquedept_empOrThrow\",\"findFirst\":\"findFirstdept_emp\",\"findFirstOrThrow\":\"findFirstdept_empOrThrow\",\"findMany\":\"findManydept_emp\",\"create\":\"createOnedept_emp\",\"createMany\":\"createManydept_emp\",\"delete\":\"deleteOnedept_emp\",\"update\":\"updateOnedept_emp\",\"deleteMany\":\"deleteManydept_emp\",\"updateMany\":\"updateManydept_emp\",\"upsert\":\"upsertOnedept_emp\",\"aggregate\":\"aggregatedept_emp\",\"groupBy\":\"groupBydept_emp\"},{\"model\":\"salary\",\"plural\":\"salaries\",\"findUnique\":\"findUniquesalary\",\"findUniqueOrThrow\":\"findUniquesalaryOrThrow\",\"findFirst\":\"findFirstsalary\",\"findFirstOrThrow\":\"findFirstsalaryOrThrow\",\"findMany\":\"findManysalary\",\"create\":\"createOnesalary\",\"createMany\":\"createManysalary\",\"delete\":\"deleteOnesalary\",\"update\":\"updateOnesalary\",\"deleteMany\":\"deleteManysalary\",\"updateMany\":\"updateManysalary\",\"upsert\":\"upsertOnesalary\",\"aggregate\":\"aggregatesalary\",\"groupBy\":\"groupBysalary\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "F:\\Projects Git\\stage-case\\prisma\\prismaClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..",
  "clientVersion": "4.11.0",
  "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\prismaClient\\query_engine-windows.dll.node")

path.join(__dirname, "libquery_engine-linux-musl.so.node");
path.join(process.cwd(), "prisma\\prismaClient\\libquery_engine-linux-musl.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\prismaClient\\schema.prisma")
