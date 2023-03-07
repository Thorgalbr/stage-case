
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model user
 * 
 */
export type user = {
  guid_user: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model tokens
 * 
 */
export type tokens = {
  guid_token: string
  token: string
  createdAt: Date
  updatedAt: Date
  users_guid: string
}

/**
 * Model permission
 * 
 */
export type permission = {
  guid_permission: string
  permTitle: string
  createdAt: Date
  updatetAt: Date
}

/**
 * Model role
 * 
 */
export type role = {
  guid_role: string
  roleTitle: string
  createdAt: Date
  updatedAt: Date
  user_guid: string
}

/**
 * Model role_permission
 * 
 */
export type role_permission = {
  guid_role_perm: string
  permission_guid: string
  role_guid: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model departments
 * 
 */
export type departments = {
  guid_dept: string
  deptName: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model employees
 * 
 */
export type employees = {
  guid_employee: string
  firstName: string
  lastName: string
  birthDate: Date
  hire_date: Date
  wage: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
  user_guid: string
}

/**
 * Model dept_emp
 * 
 */
export type dept_emp = {
  guid_dept_emp: string
  dept_guid: string
  emp_guid: string
  from_date: Date
  to_date: Date
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.tokensDelegate<GlobalReject>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<GlobalReject>;

  /**
   * `prisma.role_permission`: Exposes CRUD operations for the **role_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_permissions
    * const role_permissions = await prisma.role_permission.findMany()
    * ```
    */
  get role_permission(): Prisma.role_permissionDelegate<GlobalReject>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<GlobalReject>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<GlobalReject>;

  /**
   * `prisma.dept_emp`: Exposes CRUD operations for the **dept_emp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dept_emps
    * const dept_emps = await prisma.dept_emp.findMany()
    * ```
    */
  get dept_emp(): Prisma.dept_empDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    tokens: 'tokens',
    permission: 'permission',
    role: 'role',
    role_permission: 'role_permission',
    departments: 'departments',
    employees: 'employees',
    dept_emp: 'dept_emp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    employees: number
    tokens: number
    role: number
  }

  export type UserCountOutputTypeSelect = {
    employees?: boolean
    tokens?: boolean
    role?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PermissionCountOutputType
   */


  export type PermissionCountOutputType = {
    role_permission: number
  }

  export type PermissionCountOutputTypeSelect = {
    role_permission?: boolean
  }

  export type PermissionCountOutputTypeGetPayload<S extends boolean | null | undefined | PermissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PermissionCountOutputTypeArgs)
    ? PermissionCountOutputType 
    : S extends { select: any } & (PermissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PermissionCountOutputType ? PermissionCountOutputType[P] : never
  } 
      : PermissionCountOutputType




  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect | null
  }



  /**
   * Count Type RoleCountOutputType
   */


  export type RoleCountOutputType = {
    role_permission: number
  }

  export type RoleCountOutputTypeSelect = {
    role_permission?: boolean
  }

  export type RoleCountOutputTypeGetPayload<S extends boolean | null | undefined | RoleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoleCountOutputTypeArgs)
    ? RoleCountOutputType 
    : S extends { select: any } & (RoleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoleCountOutputType ? RoleCountOutputType[P] : never
  } 
      : RoleCountOutputType




  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect | null
  }



  /**
   * Count Type DepartmentsCountOutputType
   */


  export type DepartmentsCountOutputType = {
    dept_emp: number
  }

  export type DepartmentsCountOutputTypeSelect = {
    dept_emp?: boolean
  }

  export type DepartmentsCountOutputTypeGetPayload<S extends boolean | null | undefined | DepartmentsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DepartmentsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DepartmentsCountOutputTypeArgs)
    ? DepartmentsCountOutputType 
    : S extends { select: any } & (DepartmentsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DepartmentsCountOutputType ? DepartmentsCountOutputType[P] : never
  } 
      : DepartmentsCountOutputType




  // Custom InputTypes

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect | null
  }



  /**
   * Count Type EmployeesCountOutputType
   */


  export type EmployeesCountOutputType = {
    dept_emp: number
  }

  export type EmployeesCountOutputTypeSelect = {
    dept_emp?: boolean
  }

  export type EmployeesCountOutputTypeGetPayload<S extends boolean | null | undefined | EmployeesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmployeesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmployeesCountOutputTypeArgs)
    ? EmployeesCountOutputType 
    : S extends { select: any } & (EmployeesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EmployeesCountOutputType ? EmployeesCountOutputType[P] : never
  } 
      : EmployeesCountOutputType




  // Custom InputTypes

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    guid_user: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    guid_user: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    guid_user: number
    firstName: number
    lastName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    guid_user?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    guid_user?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    guid_user?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    guid_user: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    guid_user?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | user$employeesArgs
    tokens?: boolean | user$tokensArgs
    role?: boolean | user$roleArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type userInclude = {
    employees?: boolean | user$employeesArgs
    tokens?: boolean | user$tokensArgs
    role?: boolean | user$roleArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'employees' ? Array < employeesGetPayload<S['include'][P]>>  :
        P extends 'tokens' ? Array < tokensGetPayload<S['include'][P]>>  :
        P extends 'role' ? Array < roleGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'employees' ? Array < employeesGetPayload<S['select'][P]>>  :
        P extends 'tokens' ? Array < tokensGetPayload<S['select'][P]>>  :
        P extends 'role' ? Array < roleGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `guid_user`
     * const userWithGuid_userOnly = await prisma.user.findMany({ select: { guid_user: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    employees<T extends user$employeesArgs= {}>(args?: Subset<T, user$employeesArgs>): Prisma.PrismaPromise<Array<employeesGetPayload<T>>| Null>;

    tokens<T extends user$tokensArgs= {}>(args?: Subset<T, user$tokensArgs>): Prisma.PrismaPromise<Array<tokensGetPayload<T>>| Null>;

    role<T extends user$roleArgs= {}>(args?: Subset<T, user$roleArgs>): Prisma.PrismaPromise<Array<roleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.employees
   */
  export type user$employeesArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    where?: employeesWhereInput
    orderBy?: Enumerable<employeesOrderByWithRelationInput>
    cursor?: employeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }


  /**
   * user.tokens
   */
  export type user$tokensArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    where?: tokensWhereInput
    orderBy?: Enumerable<tokensOrderByWithRelationInput>
    cursor?: tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TokensScalarFieldEnum>
  }


  /**
   * user.role
   */
  export type user$roleArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    where?: roleWhereInput
    orderBy?: Enumerable<roleOrderByWithRelationInput>
    cursor?: roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
  }



  /**
   * Model tokens
   */


  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    guid_token: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    users_guid: string | null
  }

  export type TokensMaxAggregateOutputType = {
    guid_token: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    users_guid: string | null
  }

  export type TokensCountAggregateOutputType = {
    guid_token: number
    token: number
    createdAt: number
    updatedAt: number
    users_guid: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    guid_token?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    users_guid?: true
  }

  export type TokensMaxAggregateInputType = {
    guid_token?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    users_guid?: true
  }

  export type TokensCountAggregateInputType = {
    guid_token?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    users_guid?: true
    _all?: true
  }

  export type TokensAggregateArgs = {
    /**
     * Filter which tokens to aggregate.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: Enumerable<tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs = {
    where?: tokensWhereInput
    orderBy?: Enumerable<tokensOrderByWithAggregationInput>
    by: TokensScalarFieldEnum[]
    having?: tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }


  export type TokensGroupByOutputType = {
    guid_token: string
    token: string
    createdAt: Date
    updatedAt: Date
    users_guid: string
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type tokensSelect = {
    guid_token?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users_guid?: boolean
    user?: boolean | userArgs
  }


  export type tokensInclude = {
    user?: boolean | userArgs
  }

  export type tokensGetPayload<S extends boolean | null | undefined | tokensArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? tokens :
    S extends undefined ? never :
    S extends { include: any } & (tokensArgs | tokensFindManyArgs)
    ? tokens  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (tokensArgs | tokensFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :  P extends keyof tokens ? tokens[P] : never
  } 
      : tokens


  type tokensCountArgs = 
    Omit<tokensFindManyArgs, 'select' | 'include'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface tokensDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tokens that matches the filter.
     * @param {tokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tokensFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tokensFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tokens'> extends True ? Prisma__tokensClient<tokensGetPayload<T>> : Prisma__tokensClient<tokensGetPayload<T> | null, null>

    /**
     * Find one Tokens that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tokensFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tokensFindUniqueOrThrowArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tokensFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tokensFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tokens'> extends True ? Prisma__tokensClient<tokensGetPayload<T>> : Prisma__tokensClient<tokensGetPayload<T> | null, null>

    /**
     * Find the first Tokens that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tokensFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tokensFindFirstOrThrowArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `guid_token`
     * const tokensWithGuid_tokenOnly = await prisma.tokens.findMany({ select: { guid_token: true } })
     * 
    **/
    findMany<T extends tokensFindManyArgs>(
      args?: SelectSubset<T, tokensFindManyArgs>
    ): Prisma.PrismaPromise<Array<tokensGetPayload<T>>>

    /**
     * Create a Tokens.
     * @param {tokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
    **/
    create<T extends tokensCreateArgs>(
      args: SelectSubset<T, tokensCreateArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Create many Tokens.
     *     @param {tokensCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const tokens = await prisma.tokens.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tokensCreateManyArgs>(
      args?: SelectSubset<T, tokensCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {tokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
    **/
    delete<T extends tokensDeleteArgs>(
      args: SelectSubset<T, tokensDeleteArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Update one Tokens.
     * @param {tokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tokensUpdateArgs>(
      args: SelectSubset<T, tokensUpdateArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Delete zero or more Tokens.
     * @param {tokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tokensDeleteManyArgs>(
      args?: SelectSubset<T, tokensDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tokensUpdateManyArgs>(
      args: SelectSubset<T, tokensUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {tokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
    **/
    upsert<T extends tokensUpsertArgs>(
      args: SelectSubset<T, tokensUpsertArgs>
    ): Prisma__tokensClient<tokensGetPayload<T>>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokensCountArgs>(
      args?: Subset<T, tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tokensClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * tokens base type for findUnique actions
   */
  export type tokensFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findUnique
   */
  export interface tokensFindUniqueArgs extends tokensFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tokens findUniqueOrThrow
   */
  export type tokensFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens base type for findFirst actions
   */
  export type tokensFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: Enumerable<tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: Enumerable<TokensScalarFieldEnum>
  }

  /**
   * tokens findFirst
   */
  export interface tokensFindFirstArgs extends tokensFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tokens findFirstOrThrow
   */
  export type tokensFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: Enumerable<tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: Enumerable<TokensScalarFieldEnum>
  }


  /**
   * tokens findMany
   */
  export type tokensFindManyArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: Enumerable<tokensOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: Enumerable<TokensScalarFieldEnum>
  }


  /**
   * tokens create
   */
  export type tokensCreateArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * The data needed to create a tokens.
     */
    data: XOR<tokensCreateInput, tokensUncheckedCreateInput>
  }


  /**
   * tokens createMany
   */
  export type tokensCreateManyArgs = {
    /**
     * The data used to create many tokens.
     */
    data: Enumerable<tokensCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tokens update
   */
  export type tokensUpdateArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * The data needed to update a tokens.
     */
    data: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
    /**
     * Choose, which tokens to update.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens updateMany
   */
  export type tokensUpdateManyArgs = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
  }


  /**
   * tokens upsert
   */
  export type tokensUpsertArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * The filter to search for the tokens to update in case it exists.
     */
    where: tokensWhereUniqueInput
    /**
     * In case the tokens found by the `where` argument doesn't exist, create a new tokens with this data.
     */
    create: XOR<tokensCreateInput, tokensUncheckedCreateInput>
    /**
     * In case the tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
  }


  /**
   * tokens delete
   */
  export type tokensDeleteArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
    /**
     * Filter which tokens to delete.
     */
    where: tokensWhereUniqueInput
  }


  /**
   * tokens deleteMany
   */
  export type tokensDeleteManyArgs = {
    /**
     * Filter which tokens to delete
     */
    where?: tokensWhereInput
  }


  /**
   * tokens without action
   */
  export type tokensArgs = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tokensInclude | null
  }



  /**
   * Model permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    guid_permission: string | null
    permTitle: string | null
    createdAt: Date | null
    updatetAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    guid_permission: string | null
    permTitle: string | null
    createdAt: Date | null
    updatetAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    guid_permission: number
    permTitle: number
    createdAt: number
    updatetAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    guid_permission?: true
    permTitle?: true
    createdAt?: true
    updatetAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    guid_permission?: true
    permTitle?: true
    createdAt?: true
    updatetAt?: true
  }

  export type PermissionCountAggregateInputType = {
    guid_permission?: true
    permTitle?: true
    createdAt?: true
    updatetAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs = {
    where?: permissionWhereInput
    orderBy?: Enumerable<permissionOrderByWithAggregationInput>
    by: PermissionScalarFieldEnum[]
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    guid_permission: string
    permTitle: string
    createdAt: Date
    updatetAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect = {
    guid_permission?: boolean
    permTitle?: boolean
    createdAt?: boolean
    updatetAt?: boolean
    role_permission?: boolean | permission$role_permissionArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }


  export type permissionInclude = {
    role_permission?: boolean | permission$role_permissionArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }

  export type permissionGetPayload<S extends boolean | null | undefined | permissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? permission :
    S extends undefined ? never :
    S extends { include: any } & (permissionArgs | permissionFindManyArgs)
    ? permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'role_permission' ? Array < role_permissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (permissionArgs | permissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'role_permission' ? Array < role_permissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof permission ? permission[P] : never
  } 
      : permission


  type permissionCountArgs = 
    Omit<permissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends permissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, permissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'permission'> extends True ? Prisma__permissionClient<permissionGetPayload<T>> : Prisma__permissionClient<permissionGetPayload<T> | null, null>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, permissionFindUniqueOrThrowArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends permissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, permissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'permission'> extends True ? Prisma__permissionClient<permissionGetPayload<T>> : Prisma__permissionClient<permissionGetPayload<T> | null, null>

    /**
     * Find the first Permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, permissionFindFirstOrThrowArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `guid_permission`
     * const permissionWithGuid_permissionOnly = await prisma.permission.findMany({ select: { guid_permission: true } })
     * 
    **/
    findMany<T extends permissionFindManyArgs>(
      args?: SelectSubset<T, permissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<permissionGetPayload<T>>>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends permissionCreateArgs>(
      args: SelectSubset<T, permissionCreateArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Create many Permissions.
     *     @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends permissionCreateManyArgs>(
      args?: SelectSubset<T, permissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends permissionDeleteArgs>(
      args: SelectSubset<T, permissionDeleteArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends permissionUpdateArgs>(
      args: SelectSubset<T, permissionUpdateArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends permissionDeleteManyArgs>(
      args?: SelectSubset<T, permissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends permissionUpdateManyArgs>(
      args: SelectSubset<T, permissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends permissionUpsertArgs>(
      args: SelectSubset<T, permissionUpsertArgs>
    ): Prisma__permissionClient<permissionGetPayload<T>>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__permissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    role_permission<T extends permission$role_permissionArgs= {}>(args?: Subset<T, permission$role_permissionArgs>): Prisma.PrismaPromise<Array<role_permissionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * permission base type for findUnique actions
   */
  export type permissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUnique
   */
  export interface permissionFindUniqueArgs extends permissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission base type for findFirst actions
   */
  export type permissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }

  /**
   * permission findFirst
   */
  export interface permissionFindFirstArgs extends permissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * permission findMany
   */
  export type permissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: Enumerable<permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * permission create
   */
  export type permissionCreateArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }


  /**
   * permission createMany
   */
  export type permissionCreateManyArgs = {
    /**
     * The data used to create many permissions.
     */
    data: Enumerable<permissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * permission update
   */
  export type permissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
  }


  /**
   * permission upsert
   */
  export type permissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }


  /**
   * permission delete
   */
  export type permissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }


  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
  }


  /**
   * permission.role_permission
   */
  export type permission$role_permissionArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    where?: role_permissionWhereInput
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Role_permissionScalarFieldEnum>
  }


  /**
   * permission without action
   */
  export type permissionArgs = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: permissionInclude | null
  }



  /**
   * Model role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    guid_role: string | null
    roleTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
    user_guid: string | null
  }

  export type RoleMaxAggregateOutputType = {
    guid_role: string | null
    roleTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
    user_guid: string | null
  }

  export type RoleCountAggregateOutputType = {
    guid_role: number
    roleTitle: number
    createdAt: number
    updatedAt: number
    user_guid: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    guid_role?: true
    roleTitle?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
  }

  export type RoleMaxAggregateInputType = {
    guid_role?: true
    roleTitle?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
  }

  export type RoleCountAggregateInputType = {
    guid_role?: true
    roleTitle?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs = {
    where?: roleWhereInput
    orderBy?: Enumerable<roleOrderByWithAggregationInput>
    by: RoleScalarFieldEnum[]
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    guid_role: string
    roleTitle: string
    createdAt: Date
    updatedAt: Date
    user_guid: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect = {
    guid_role?: boolean
    roleTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_guid?: boolean
    user?: boolean | userArgs
    role_permission?: boolean | role$role_permissionArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }


  export type roleInclude = {
    user?: boolean | userArgs
    role_permission?: boolean | role$role_permissionArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }

  export type roleGetPayload<S extends boolean | null | undefined | roleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? role :
    S extends undefined ? never :
    S extends { include: any } & (roleArgs | roleFindManyArgs)
    ? role  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends 'role_permission' ? Array < role_permissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (roleArgs | roleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends 'role_permission' ? Array < role_permissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof role ? role[P] : never
  } 
      : role


  type roleCountArgs = 
    Omit<roleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends roleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, roleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'role'> extends True ? Prisma__roleClient<roleGetPayload<T>> : Prisma__roleClient<roleGetPayload<T> | null, null>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends roleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, roleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'role'> extends True ? Prisma__roleClient<roleGetPayload<T>> : Prisma__roleClient<roleGetPayload<T> | null, null>

    /**
     * Find the first Role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `guid_role`
     * const roleWithGuid_roleOnly = await prisma.role.findMany({ select: { guid_role: true } })
     * 
    **/
    findMany<T extends roleFindManyArgs>(
      args?: SelectSubset<T, roleFindManyArgs>
    ): Prisma.PrismaPromise<Array<roleGetPayload<T>>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends roleCreateArgs>(
      args: SelectSubset<T, roleCreateArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Create many Roles.
     *     @param {roleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends roleCreateManyArgs>(
      args?: SelectSubset<T, roleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends roleDeleteArgs>(
      args: SelectSubset<T, roleDeleteArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends roleUpdateArgs>(
      args: SelectSubset<T, roleUpdateArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends roleDeleteManyArgs>(
      args?: SelectSubset<T, roleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends roleUpdateManyArgs>(
      args: SelectSubset<T, roleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends roleUpsertArgs>(
      args: SelectSubset<T, roleUpsertArgs>
    ): Prisma__roleClient<roleGetPayload<T>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__roleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    role_permission<T extends role$role_permissionArgs= {}>(args?: Subset<T, role$role_permissionArgs>): Prisma.PrismaPromise<Array<role_permissionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * role base type for findUnique actions
   */
  export type roleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUnique
   */
  export interface roleFindUniqueArgs extends roleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }


  /**
   * role base type for findFirst actions
   */
  export type roleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * role findFirst
   */
  export interface roleFindFirstArgs extends roleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * role findMany
   */
  export type roleFindManyArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: Enumerable<roleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * role create
   */
  export type roleCreateArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }


  /**
   * role createMany
   */
  export type roleCreateManyArgs = {
    /**
     * The data used to create many roles.
     */
    data: Enumerable<roleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * role update
   */
  export type roleUpdateArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }


  /**
   * role updateMany
   */
  export type roleUpdateManyArgs = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
  }


  /**
   * role upsert
   */
  export type roleUpsertArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }


  /**
   * role delete
   */
  export type roleDeleteArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }


  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
  }


  /**
   * role.role_permission
   */
  export type role$role_permissionArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    where?: role_permissionWhereInput
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Role_permissionScalarFieldEnum>
  }


  /**
   * role without action
   */
  export type roleArgs = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude | null
  }



  /**
   * Model role_permission
   */


  export type AggregateRole_permission = {
    _count: Role_permissionCountAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  export type Role_permissionMinAggregateOutputType = {
    guid_role_perm: string | null
    permission_guid: string | null
    role_guid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Role_permissionMaxAggregateOutputType = {
    guid_role_perm: string | null
    permission_guid: string | null
    role_guid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Role_permissionCountAggregateOutputType = {
    guid_role_perm: number
    permission_guid: number
    role_guid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Role_permissionMinAggregateInputType = {
    guid_role_perm?: true
    permission_guid?: true
    role_guid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Role_permissionMaxAggregateInputType = {
    guid_role_perm?: true
    permission_guid?: true
    role_guid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Role_permissionCountAggregateInputType = {
    guid_role_perm?: true
    permission_guid?: true
    role_guid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Role_permissionAggregateArgs = {
    /**
     * Filter which role_permission to aggregate.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_permissions
    **/
    _count?: true | Role_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_permissionMaxAggregateInputType
  }

  export type GetRole_permissionAggregateType<T extends Role_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_permission[P]>
      : GetScalarType<T[P], AggregateRole_permission[P]>
  }




  export type Role_permissionGroupByArgs = {
    where?: role_permissionWhereInput
    orderBy?: Enumerable<role_permissionOrderByWithAggregationInput>
    by: Role_permissionScalarFieldEnum[]
    having?: role_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_permissionCountAggregateInputType | true
    _min?: Role_permissionMinAggregateInputType
    _max?: Role_permissionMaxAggregateInputType
  }


  export type Role_permissionGroupByOutputType = {
    guid_role_perm: string
    permission_guid: string
    role_guid: string
    createdAt: Date
    updatedAt: Date
    _count: Role_permissionCountAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  type GetRole_permissionGroupByPayload<T extends Role_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Role_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
        }
      >
    >


  export type role_permissionSelect = {
    guid_role_perm?: boolean
    permission_guid?: boolean
    role_guid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permission?: boolean | permissionArgs
    role?: boolean | roleArgs
  }


  export type role_permissionInclude = {
    permission?: boolean | permissionArgs
    role?: boolean | roleArgs
  }

  export type role_permissionGetPayload<S extends boolean | null | undefined | role_permissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? role_permission :
    S extends undefined ? never :
    S extends { include: any } & (role_permissionArgs | role_permissionFindManyArgs)
    ? role_permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'permission' ? permissionGetPayload<S['include'][P]> :
        P extends 'role' ? roleGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (role_permissionArgs | role_permissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'permission' ? permissionGetPayload<S['select'][P]> :
        P extends 'role' ? roleGetPayload<S['select'][P]> :  P extends keyof role_permission ? role_permission[P] : never
  } 
      : role_permission


  type role_permissionCountArgs = 
    Omit<role_permissionFindManyArgs, 'select' | 'include'> & {
      select?: Role_permissionCountAggregateInputType | true
    }

  export interface role_permissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Role_permission that matches the filter.
     * @param {role_permissionFindUniqueArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends role_permissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, role_permissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'role_permission'> extends True ? Prisma__role_permissionClient<role_permissionGetPayload<T>> : Prisma__role_permissionClient<role_permissionGetPayload<T> | null, null>

    /**
     * Find one Role_permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {role_permissionFindUniqueOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends role_permissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, role_permissionFindUniqueOrThrowArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Find the first Role_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends role_permissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, role_permissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'role_permission'> extends True ? Prisma__role_permissionClient<role_permissionGetPayload<T>> : Prisma__role_permissionClient<role_permissionGetPayload<T> | null, null>

    /**
     * Find the first Role_permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends role_permissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, role_permissionFindFirstOrThrowArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Find zero or more Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_permissions
     * const role_permissions = await prisma.role_permission.findMany()
     * 
     * // Get first 10 Role_permissions
     * const role_permissions = await prisma.role_permission.findMany({ take: 10 })
     * 
     * // Only select the `guid_role_perm`
     * const role_permissionWithGuid_role_permOnly = await prisma.role_permission.findMany({ select: { guid_role_perm: true } })
     * 
    **/
    findMany<T extends role_permissionFindManyArgs>(
      args?: SelectSubset<T, role_permissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<role_permissionGetPayload<T>>>

    /**
     * Create a Role_permission.
     * @param {role_permissionCreateArgs} args - Arguments to create a Role_permission.
     * @example
     * // Create one Role_permission
     * const Role_permission = await prisma.role_permission.create({
     *   data: {
     *     // ... data to create a Role_permission
     *   }
     * })
     * 
    **/
    create<T extends role_permissionCreateArgs>(
      args: SelectSubset<T, role_permissionCreateArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Create many Role_permissions.
     *     @param {role_permissionCreateManyArgs} args - Arguments to create many Role_permissions.
     *     @example
     *     // Create many Role_permissions
     *     const role_permission = await prisma.role_permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends role_permissionCreateManyArgs>(
      args?: SelectSubset<T, role_permissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_permission.
     * @param {role_permissionDeleteArgs} args - Arguments to delete one Role_permission.
     * @example
     * // Delete one Role_permission
     * const Role_permission = await prisma.role_permission.delete({
     *   where: {
     *     // ... filter to delete one Role_permission
     *   }
     * })
     * 
    **/
    delete<T extends role_permissionDeleteArgs>(
      args: SelectSubset<T, role_permissionDeleteArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Update one Role_permission.
     * @param {role_permissionUpdateArgs} args - Arguments to update one Role_permission.
     * @example
     * // Update one Role_permission
     * const role_permission = await prisma.role_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends role_permissionUpdateArgs>(
      args: SelectSubset<T, role_permissionUpdateArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Delete zero or more Role_permissions.
     * @param {role_permissionDeleteManyArgs} args - Arguments to filter Role_permissions to delete.
     * @example
     * // Delete a few Role_permissions
     * const { count } = await prisma.role_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends role_permissionDeleteManyArgs>(
      args?: SelectSubset<T, role_permissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_permissions
     * const role_permission = await prisma.role_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends role_permissionUpdateManyArgs>(
      args: SelectSubset<T, role_permissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_permission.
     * @param {role_permissionUpsertArgs} args - Arguments to update or create a Role_permission.
     * @example
     * // Update or create a Role_permission
     * const role_permission = await prisma.role_permission.upsert({
     *   create: {
     *     // ... data to create a Role_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_permission we want to update
     *   }
     * })
    **/
    upsert<T extends role_permissionUpsertArgs>(
      args: SelectSubset<T, role_permissionUpsertArgs>
    ): Prisma__role_permissionClient<role_permissionGetPayload<T>>

    /**
     * Count the number of Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionCountArgs} args - Arguments to filter Role_permissions to count.
     * @example
     * // Count the number of Role_permissions
     * const count = await prisma.role_permission.count({
     *   where: {
     *     // ... the filter for the Role_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_permissionCountArgs>(
      args?: Subset<T, role_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_permissionAggregateArgs>(args: Subset<T, Role_permissionAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionAggregateType<T>>

    /**
     * Group by Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Role_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Role_permissionGroupByArgs['orderBy'] }
        : { orderBy?: Role_permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Role_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for role_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__role_permissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    permission<T extends permissionArgs= {}>(args?: Subset<T, permissionArgs>): Prisma__permissionClient<permissionGetPayload<T> | Null>;

    role<T extends roleArgs= {}>(args?: Subset<T, roleArgs>): Prisma__roleClient<roleGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * role_permission base type for findUnique actions
   */
  export type role_permissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission findUnique
   */
  export interface role_permissionFindUniqueArgs extends role_permissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * role_permission findUniqueOrThrow
   */
  export type role_permissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }


  /**
   * role_permission base type for findFirst actions
   */
  export type role_permissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Enumerable<Role_permissionScalarFieldEnum>
  }

  /**
   * role_permission findFirst
   */
  export interface role_permissionFindFirstArgs extends role_permissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * role_permission findFirstOrThrow
   */
  export type role_permissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Enumerable<Role_permissionScalarFieldEnum>
  }


  /**
   * role_permission findMany
   */
  export type role_permissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: Enumerable<role_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    distinct?: Enumerable<Role_permissionScalarFieldEnum>
  }


  /**
   * role_permission create
   */
  export type role_permissionCreateArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * The data needed to create a role_permission.
     */
    data: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
  }


  /**
   * role_permission createMany
   */
  export type role_permissionCreateManyArgs = {
    /**
     * The data used to create many role_permissions.
     */
    data: Enumerable<role_permissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * role_permission update
   */
  export type role_permissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * The data needed to update a role_permission.
     */
    data: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
    /**
     * Choose, which role_permission to update.
     */
    where: role_permissionWhereUniqueInput
  }


  /**
   * role_permission updateMany
   */
  export type role_permissionUpdateManyArgs = {
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionWhereInput
  }


  /**
   * role_permission upsert
   */
  export type role_permissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * The filter to search for the role_permission to update in case it exists.
     */
    where: role_permissionWhereUniqueInput
    /**
     * In case the role_permission found by the `where` argument doesn't exist, create a new role_permission with this data.
     */
    create: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
    /**
     * In case the role_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
  }


  /**
   * role_permission delete
   */
  export type role_permissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
    /**
     * Filter which role_permission to delete.
     */
    where: role_permissionWhereUniqueInput
  }


  /**
   * role_permission deleteMany
   */
  export type role_permissionDeleteManyArgs = {
    /**
     * Filter which role_permissions to delete
     */
    where?: role_permissionWhereInput
  }


  /**
   * role_permission without action
   */
  export type role_permissionArgs = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: role_permissionInclude | null
  }



  /**
   * Model departments
   */


  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    guid_dept: string | null
    deptName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    guid_dept: string | null
    deptName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    guid_dept: number
    deptName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    guid_dept?: true
    deptName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    guid_dept?: true
    deptName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsCountAggregateInputType = {
    guid_dept?: true
    deptName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: Enumerable<departmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs = {
    where?: departmentsWhereInput
    orderBy?: Enumerable<departmentsOrderByWithAggregationInput>
    by: DepartmentsScalarFieldEnum[]
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }


  export type DepartmentsGroupByOutputType = {
    guid_dept: string
    deptName: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect = {
    guid_dept?: boolean
    deptName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dept_emp?: boolean | departments$dept_empArgs
    _count?: boolean | DepartmentsCountOutputTypeArgs
  }


  export type departmentsInclude = {
    dept_emp?: boolean | departments$dept_empArgs
    _count?: boolean | DepartmentsCountOutputTypeArgs
  }

  export type departmentsGetPayload<S extends boolean | null | undefined | departmentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? departments :
    S extends undefined ? never :
    S extends { include: any } & (departmentsArgs | departmentsFindManyArgs)
    ? departments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dept_emp' ? Array < dept_empGetPayload<S['include'][P]>>  :
        P extends '_count' ? DepartmentsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (departmentsArgs | departmentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dept_emp' ? Array < dept_empGetPayload<S['select'][P]>>  :
        P extends '_count' ? DepartmentsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof departments ? departments[P] : never
  } 
      : departments


  type departmentsCountArgs = 
    Omit<departmentsFindManyArgs, 'select' | 'include'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends departmentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, departmentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'departments'> extends True ? Prisma__departmentsClient<departmentsGetPayload<T>> : Prisma__departmentsClient<departmentsGetPayload<T> | null, null>

    /**
     * Find one Departments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, departmentsFindUniqueOrThrowArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends departmentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, departmentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'departments'> extends True ? Prisma__departmentsClient<departmentsGetPayload<T>> : Prisma__departmentsClient<departmentsGetPayload<T> | null, null>

    /**
     * Find the first Departments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, departmentsFindFirstOrThrowArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `guid_dept`
     * const departmentsWithGuid_deptOnly = await prisma.departments.findMany({ select: { guid_dept: true } })
     * 
    **/
    findMany<T extends departmentsFindManyArgs>(
      args?: SelectSubset<T, departmentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<departmentsGetPayload<T>>>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
    **/
    create<T extends departmentsCreateArgs>(
      args: SelectSubset<T, departmentsCreateArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Create many Departments.
     *     @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const departments = await prisma.departments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends departmentsCreateManyArgs>(
      args?: SelectSubset<T, departmentsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
    **/
    delete<T extends departmentsDeleteArgs>(
      args: SelectSubset<T, departmentsDeleteArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends departmentsUpdateArgs>(
      args: SelectSubset<T, departmentsUpdateArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends departmentsDeleteManyArgs>(
      args?: SelectSubset<T, departmentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends departmentsUpdateManyArgs>(
      args: SelectSubset<T, departmentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
    **/
    upsert<T extends departmentsUpsertArgs>(
      args: SelectSubset<T, departmentsUpsertArgs>
    ): Prisma__departmentsClient<departmentsGetPayload<T>>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__departmentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dept_emp<T extends departments$dept_empArgs= {}>(args?: Subset<T, departments$dept_empArgs>): Prisma.PrismaPromise<Array<dept_empGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * departments base type for findUnique actions
   */
  export type departmentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUnique
   */
  export interface departmentsFindUniqueArgs extends departmentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }


  /**
   * departments base type for findFirst actions
   */
  export type departmentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: Enumerable<departmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: Enumerable<DepartmentsScalarFieldEnum>
  }

  /**
   * departments findFirst
   */
  export interface departmentsFindFirstArgs extends departmentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: Enumerable<departmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: Enumerable<DepartmentsScalarFieldEnum>
  }


  /**
   * departments findMany
   */
  export type departmentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: Enumerable<departmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: Enumerable<DepartmentsScalarFieldEnum>
  }


  /**
   * departments create
   */
  export type departmentsCreateArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }


  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs = {
    /**
     * The data used to create many departments.
     */
    data: Enumerable<departmentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * departments update
   */
  export type departmentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }


  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
  }


  /**
   * departments upsert
   */
  export type departmentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }


  /**
   * departments delete
   */
  export type departmentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }


  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
  }


  /**
   * departments.dept_emp
   */
  export type departments$dept_empArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    where?: dept_empWhereInput
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    cursor?: dept_empWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Dept_empScalarFieldEnum>
  }


  /**
   * departments without action
   */
  export type departmentsArgs = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: departmentsInclude | null
  }



  /**
   * Model employees
   */


  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    wage: Decimal | null
  }

  export type EmployeesSumAggregateOutputType = {
    wage: Decimal | null
  }

  export type EmployeesMinAggregateOutputType = {
    guid_employee: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    hire_date: Date | null
    wage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    user_guid: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    guid_employee: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    hire_date: Date | null
    wage: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    user_guid: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    guid_employee: number
    firstName: number
    lastName: number
    birthDate: number
    hire_date: number
    wage: number
    createdAt: number
    updatedAt: number
    user_guid: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    wage?: true
  }

  export type EmployeesSumAggregateInputType = {
    wage?: true
  }

  export type EmployeesMinAggregateInputType = {
    guid_employee?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hire_date?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
  }

  export type EmployeesMaxAggregateInputType = {
    guid_employee?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hire_date?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
  }

  export type EmployeesCountAggregateInputType = {
    guid_employee?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    hire_date?: true
    wage?: true
    createdAt?: true
    updatedAt?: true
    user_guid?: true
    _all?: true
  }

  export type EmployeesAggregateArgs = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: Enumerable<employeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs = {
    where?: employeesWhereInput
    orderBy?: Enumerable<employeesOrderByWithAggregationInput>
    by: EmployeesScalarFieldEnum[]
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }


  export type EmployeesGroupByOutputType = {
    guid_employee: string
    firstName: string
    lastName: string
    birthDate: Date
    hire_date: Date
    wage: Decimal
    createdAt: Date
    updatedAt: Date
    user_guid: string
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect = {
    guid_employee?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    hire_date?: boolean
    wage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_guid?: boolean
    dept_emp?: boolean | employees$dept_empArgs
    user?: boolean | userArgs
    _count?: boolean | EmployeesCountOutputTypeArgs
  }


  export type employeesInclude = {
    dept_emp?: boolean | employees$dept_empArgs
    user?: boolean | userArgs
    _count?: boolean | EmployeesCountOutputTypeArgs
  }

  export type employeesGetPayload<S extends boolean | null | undefined | employeesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? employees :
    S extends undefined ? never :
    S extends { include: any } & (employeesArgs | employeesFindManyArgs)
    ? employees  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dept_emp' ? Array < dept_empGetPayload<S['include'][P]>>  :
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends '_count' ? EmployeesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (employeesArgs | employeesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dept_emp' ? Array < dept_empGetPayload<S['select'][P]>>  :
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends '_count' ? EmployeesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof employees ? employees[P] : never
  } 
      : employees


  type employeesCountArgs = 
    Omit<employeesFindManyArgs, 'select' | 'include'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends employeesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, employeesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'employees'> extends True ? Prisma__employeesClient<employeesGetPayload<T>> : Prisma__employeesClient<employeesGetPayload<T> | null, null>

    /**
     * Find one Employees that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, employeesFindUniqueOrThrowArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends employeesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, employeesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'employees'> extends True ? Prisma__employeesClient<employeesGetPayload<T>> : Prisma__employeesClient<employeesGetPayload<T> | null, null>

    /**
     * Find the first Employees that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, employeesFindFirstOrThrowArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `guid_employee`
     * const employeesWithGuid_employeeOnly = await prisma.employees.findMany({ select: { guid_employee: true } })
     * 
    **/
    findMany<T extends employeesFindManyArgs>(
      args?: SelectSubset<T, employeesFindManyArgs>
    ): Prisma.PrismaPromise<Array<employeesGetPayload<T>>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
    **/
    create<T extends employeesCreateArgs>(
      args: SelectSubset<T, employeesCreateArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Create many Employees.
     *     @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employees = await prisma.employees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends employeesCreateManyArgs>(
      args?: SelectSubset<T, employeesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
    **/
    delete<T extends employeesDeleteArgs>(
      args: SelectSubset<T, employeesDeleteArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends employeesUpdateArgs>(
      args: SelectSubset<T, employeesUpdateArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends employeesDeleteManyArgs>(
      args?: SelectSubset<T, employeesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends employeesUpdateManyArgs>(
      args: SelectSubset<T, employeesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
    **/
    upsert<T extends employeesUpsertArgs>(
      args: SelectSubset<T, employeesUpsertArgs>
    ): Prisma__employeesClient<employeesGetPayload<T>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__employeesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dept_emp<T extends employees$dept_empArgs= {}>(args?: Subset<T, employees$dept_empArgs>): Prisma.PrismaPromise<Array<dept_empGetPayload<T>>| Null>;

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * employees base type for findUnique actions
   */
  export type employeesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUnique
   */
  export interface employeesFindUniqueArgs extends employeesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }


  /**
   * employees base type for findFirst actions
   */
  export type employeesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: Enumerable<employeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }

  /**
   * employees findFirst
   */
  export interface employeesFindFirstArgs extends employeesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: Enumerable<employeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }


  /**
   * employees findMany
   */
  export type employeesFindManyArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: Enumerable<employeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }


  /**
   * employees create
   */
  export type employeesCreateArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }


  /**
   * employees createMany
   */
  export type employeesCreateManyArgs = {
    /**
     * The data used to create many employees.
     */
    data: Enumerable<employeesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * employees update
   */
  export type employeesUpdateArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }


  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
  }


  /**
   * employees upsert
   */
  export type employeesUpsertArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }


  /**
   * employees delete
   */
  export type employeesDeleteArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }


  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
  }


  /**
   * employees.dept_emp
   */
  export type employees$dept_empArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    where?: dept_empWhereInput
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    cursor?: dept_empWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Dept_empScalarFieldEnum>
  }


  /**
   * employees without action
   */
  export type employeesArgs = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeesInclude | null
  }



  /**
   * Model dept_emp
   */


  export type AggregateDept_emp = {
    _count: Dept_empCountAggregateOutputType | null
    _min: Dept_empMinAggregateOutputType | null
    _max: Dept_empMaxAggregateOutputType | null
  }

  export type Dept_empMinAggregateOutputType = {
    guid_dept_emp: string | null
    dept_guid: string | null
    emp_guid: string | null
    from_date: Date | null
    to_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Dept_empMaxAggregateOutputType = {
    guid_dept_emp: string | null
    dept_guid: string | null
    emp_guid: string | null
    from_date: Date | null
    to_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Dept_empCountAggregateOutputType = {
    guid_dept_emp: number
    dept_guid: number
    emp_guid: number
    from_date: number
    to_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Dept_empMinAggregateInputType = {
    guid_dept_emp?: true
    dept_guid?: true
    emp_guid?: true
    from_date?: true
    to_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Dept_empMaxAggregateInputType = {
    guid_dept_emp?: true
    dept_guid?: true
    emp_guid?: true
    from_date?: true
    to_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Dept_empCountAggregateInputType = {
    guid_dept_emp?: true
    dept_guid?: true
    emp_guid?: true
    from_date?: true
    to_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Dept_empAggregateArgs = {
    /**
     * Filter which dept_emp to aggregate.
     */
    where?: dept_empWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dept_emps to fetch.
     */
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dept_empWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dept_emps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dept_emps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dept_emps
    **/
    _count?: true | Dept_empCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dept_empMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dept_empMaxAggregateInputType
  }

  export type GetDept_empAggregateType<T extends Dept_empAggregateArgs> = {
        [P in keyof T & keyof AggregateDept_emp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDept_emp[P]>
      : GetScalarType<T[P], AggregateDept_emp[P]>
  }




  export type Dept_empGroupByArgs = {
    where?: dept_empWhereInput
    orderBy?: Enumerable<dept_empOrderByWithAggregationInput>
    by: Dept_empScalarFieldEnum[]
    having?: dept_empScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dept_empCountAggregateInputType | true
    _min?: Dept_empMinAggregateInputType
    _max?: Dept_empMaxAggregateInputType
  }


  export type Dept_empGroupByOutputType = {
    guid_dept_emp: string
    dept_guid: string
    emp_guid: string
    from_date: Date
    to_date: Date
    createdAt: Date
    updatedAt: Date
    _count: Dept_empCountAggregateOutputType | null
    _min: Dept_empMinAggregateOutputType | null
    _max: Dept_empMaxAggregateOutputType | null
  }

  type GetDept_empGroupByPayload<T extends Dept_empGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Dept_empGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dept_empGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dept_empGroupByOutputType[P]>
            : GetScalarType<T[P], Dept_empGroupByOutputType[P]>
        }
      >
    >


  export type dept_empSelect = {
    guid_dept_emp?: boolean
    dept_guid?: boolean
    emp_guid?: boolean
    from_date?: boolean
    to_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departments?: boolean | departmentsArgs
    employee?: boolean | employeesArgs
  }


  export type dept_empInclude = {
    departments?: boolean | departmentsArgs
    employee?: boolean | employeesArgs
  }

  export type dept_empGetPayload<S extends boolean | null | undefined | dept_empArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? dept_emp :
    S extends undefined ? never :
    S extends { include: any } & (dept_empArgs | dept_empFindManyArgs)
    ? dept_emp  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'departments' ? departmentsGetPayload<S['include'][P]> :
        P extends 'employee' ? employeesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (dept_empArgs | dept_empFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'departments' ? departmentsGetPayload<S['select'][P]> :
        P extends 'employee' ? employeesGetPayload<S['select'][P]> :  P extends keyof dept_emp ? dept_emp[P] : never
  } 
      : dept_emp


  type dept_empCountArgs = 
    Omit<dept_empFindManyArgs, 'select' | 'include'> & {
      select?: Dept_empCountAggregateInputType | true
    }

  export interface dept_empDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Dept_emp that matches the filter.
     * @param {dept_empFindUniqueArgs} args - Arguments to find a Dept_emp
     * @example
     * // Get one Dept_emp
     * const dept_emp = await prisma.dept_emp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dept_empFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dept_empFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dept_emp'> extends True ? Prisma__dept_empClient<dept_empGetPayload<T>> : Prisma__dept_empClient<dept_empGetPayload<T> | null, null>

    /**
     * Find one Dept_emp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {dept_empFindUniqueOrThrowArgs} args - Arguments to find a Dept_emp
     * @example
     * // Get one Dept_emp
     * const dept_emp = await prisma.dept_emp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dept_empFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, dept_empFindUniqueOrThrowArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Find the first Dept_emp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dept_empFindFirstArgs} args - Arguments to find a Dept_emp
     * @example
     * // Get one Dept_emp
     * const dept_emp = await prisma.dept_emp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dept_empFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dept_empFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dept_emp'> extends True ? Prisma__dept_empClient<dept_empGetPayload<T>> : Prisma__dept_empClient<dept_empGetPayload<T> | null, null>

    /**
     * Find the first Dept_emp that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dept_empFindFirstOrThrowArgs} args - Arguments to find a Dept_emp
     * @example
     * // Get one Dept_emp
     * const dept_emp = await prisma.dept_emp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dept_empFindFirstOrThrowArgs>(
      args?: SelectSubset<T, dept_empFindFirstOrThrowArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Find zero or more Dept_emps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dept_empFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dept_emps
     * const dept_emps = await prisma.dept_emp.findMany()
     * 
     * // Get first 10 Dept_emps
     * const dept_emps = await prisma.dept_emp.findMany({ take: 10 })
     * 
     * // Only select the `guid_dept_emp`
     * const dept_empWithGuid_dept_empOnly = await prisma.dept_emp.findMany({ select: { guid_dept_emp: true } })
     * 
    **/
    findMany<T extends dept_empFindManyArgs>(
      args?: SelectSubset<T, dept_empFindManyArgs>
    ): Prisma.PrismaPromise<Array<dept_empGetPayload<T>>>

    /**
     * Create a Dept_emp.
     * @param {dept_empCreateArgs} args - Arguments to create a Dept_emp.
     * @example
     * // Create one Dept_emp
     * const Dept_emp = await prisma.dept_emp.create({
     *   data: {
     *     // ... data to create a Dept_emp
     *   }
     * })
     * 
    **/
    create<T extends dept_empCreateArgs>(
      args: SelectSubset<T, dept_empCreateArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Create many Dept_emps.
     *     @param {dept_empCreateManyArgs} args - Arguments to create many Dept_emps.
     *     @example
     *     // Create many Dept_emps
     *     const dept_emp = await prisma.dept_emp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dept_empCreateManyArgs>(
      args?: SelectSubset<T, dept_empCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dept_emp.
     * @param {dept_empDeleteArgs} args - Arguments to delete one Dept_emp.
     * @example
     * // Delete one Dept_emp
     * const Dept_emp = await prisma.dept_emp.delete({
     *   where: {
     *     // ... filter to delete one Dept_emp
     *   }
     * })
     * 
    **/
    delete<T extends dept_empDeleteArgs>(
      args: SelectSubset<T, dept_empDeleteArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Update one Dept_emp.
     * @param {dept_empUpdateArgs} args - Arguments to update one Dept_emp.
     * @example
     * // Update one Dept_emp
     * const dept_emp = await prisma.dept_emp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dept_empUpdateArgs>(
      args: SelectSubset<T, dept_empUpdateArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Delete zero or more Dept_emps.
     * @param {dept_empDeleteManyArgs} args - Arguments to filter Dept_emps to delete.
     * @example
     * // Delete a few Dept_emps
     * const { count } = await prisma.dept_emp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dept_empDeleteManyArgs>(
      args?: SelectSubset<T, dept_empDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dept_emps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dept_empUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dept_emps
     * const dept_emp = await prisma.dept_emp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dept_empUpdateManyArgs>(
      args: SelectSubset<T, dept_empUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dept_emp.
     * @param {dept_empUpsertArgs} args - Arguments to update or create a Dept_emp.
     * @example
     * // Update or create a Dept_emp
     * const dept_emp = await prisma.dept_emp.upsert({
     *   create: {
     *     // ... data to create a Dept_emp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dept_emp we want to update
     *   }
     * })
    **/
    upsert<T extends dept_empUpsertArgs>(
      args: SelectSubset<T, dept_empUpsertArgs>
    ): Prisma__dept_empClient<dept_empGetPayload<T>>

    /**
     * Count the number of Dept_emps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dept_empCountArgs} args - Arguments to filter Dept_emps to count.
     * @example
     * // Count the number of Dept_emps
     * const count = await prisma.dept_emp.count({
     *   where: {
     *     // ... the filter for the Dept_emps we want to count
     *   }
     * })
    **/
    count<T extends dept_empCountArgs>(
      args?: Subset<T, dept_empCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dept_empCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dept_emp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dept_empAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Dept_empAggregateArgs>(args: Subset<T, Dept_empAggregateArgs>): Prisma.PrismaPromise<GetDept_empAggregateType<T>>

    /**
     * Group by Dept_emp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dept_empGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Dept_empGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dept_empGroupByArgs['orderBy'] }
        : { orderBy?: Dept_empGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Dept_empGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDept_empGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for dept_emp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dept_empClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    departments<T extends departmentsArgs= {}>(args?: Subset<T, departmentsArgs>): Prisma__departmentsClient<departmentsGetPayload<T> | Null>;

    employee<T extends employeesArgs= {}>(args?: Subset<T, employeesArgs>): Prisma__employeesClient<employeesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * dept_emp base type for findUnique actions
   */
  export type dept_empFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter, which dept_emp to fetch.
     */
    where: dept_empWhereUniqueInput
  }

  /**
   * dept_emp findUnique
   */
  export interface dept_empFindUniqueArgs extends dept_empFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dept_emp findUniqueOrThrow
   */
  export type dept_empFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter, which dept_emp to fetch.
     */
    where: dept_empWhereUniqueInput
  }


  /**
   * dept_emp base type for findFirst actions
   */
  export type dept_empFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter, which dept_emp to fetch.
     */
    where?: dept_empWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dept_emps to fetch.
     */
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dept_emps.
     */
    cursor?: dept_empWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dept_emps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dept_emps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dept_emps.
     */
    distinct?: Enumerable<Dept_empScalarFieldEnum>
  }

  /**
   * dept_emp findFirst
   */
  export interface dept_empFindFirstArgs extends dept_empFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * dept_emp findFirstOrThrow
   */
  export type dept_empFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter, which dept_emp to fetch.
     */
    where?: dept_empWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dept_emps to fetch.
     */
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dept_emps.
     */
    cursor?: dept_empWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dept_emps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dept_emps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dept_emps.
     */
    distinct?: Enumerable<Dept_empScalarFieldEnum>
  }


  /**
   * dept_emp findMany
   */
  export type dept_empFindManyArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter, which dept_emps to fetch.
     */
    where?: dept_empWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dept_emps to fetch.
     */
    orderBy?: Enumerable<dept_empOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dept_emps.
     */
    cursor?: dept_empWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dept_emps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dept_emps.
     */
    skip?: number
    distinct?: Enumerable<Dept_empScalarFieldEnum>
  }


  /**
   * dept_emp create
   */
  export type dept_empCreateArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * The data needed to create a dept_emp.
     */
    data: XOR<dept_empCreateInput, dept_empUncheckedCreateInput>
  }


  /**
   * dept_emp createMany
   */
  export type dept_empCreateManyArgs = {
    /**
     * The data used to create many dept_emps.
     */
    data: Enumerable<dept_empCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dept_emp update
   */
  export type dept_empUpdateArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * The data needed to update a dept_emp.
     */
    data: XOR<dept_empUpdateInput, dept_empUncheckedUpdateInput>
    /**
     * Choose, which dept_emp to update.
     */
    where: dept_empWhereUniqueInput
  }


  /**
   * dept_emp updateMany
   */
  export type dept_empUpdateManyArgs = {
    /**
     * The data used to update dept_emps.
     */
    data: XOR<dept_empUpdateManyMutationInput, dept_empUncheckedUpdateManyInput>
    /**
     * Filter which dept_emps to update
     */
    where?: dept_empWhereInput
  }


  /**
   * dept_emp upsert
   */
  export type dept_empUpsertArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * The filter to search for the dept_emp to update in case it exists.
     */
    where: dept_empWhereUniqueInput
    /**
     * In case the dept_emp found by the `where` argument doesn't exist, create a new dept_emp with this data.
     */
    create: XOR<dept_empCreateInput, dept_empUncheckedCreateInput>
    /**
     * In case the dept_emp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dept_empUpdateInput, dept_empUncheckedUpdateInput>
  }


  /**
   * dept_emp delete
   */
  export type dept_empDeleteArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
    /**
     * Filter which dept_emp to delete.
     */
    where: dept_empWhereUniqueInput
  }


  /**
   * dept_emp deleteMany
   */
  export type dept_empDeleteManyArgs = {
    /**
     * Filter which dept_emps to delete
     */
    where?: dept_empWhereInput
  }


  /**
   * dept_emp without action
   */
  export type dept_empArgs = {
    /**
     * Select specific fields to fetch from the dept_emp
     */
    select?: dept_empSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: dept_empInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DepartmentsScalarFieldEnum: {
    guid_dept: 'guid_dept',
    deptName: 'deptName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const Dept_empScalarFieldEnum: {
    guid_dept_emp: 'guid_dept_emp',
    dept_guid: 'dept_guid',
    emp_guid: 'emp_guid',
    from_date: 'from_date',
    to_date: 'to_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Dept_empScalarFieldEnum = (typeof Dept_empScalarFieldEnum)[keyof typeof Dept_empScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    guid_employee: 'guid_employee',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    hire_date: 'hire_date',
    wage: 'wage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    user_guid: 'user_guid'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    guid_permission: 'guid_permission',
    permTitle: 'permTitle',
    createdAt: 'createdAt',
    updatetAt: 'updatetAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoleScalarFieldEnum: {
    guid_role: 'guid_role',
    roleTitle: 'roleTitle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    user_guid: 'user_guid'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Role_permissionScalarFieldEnum: {
    guid_role_perm: 'guid_role_perm',
    permission_guid: 'permission_guid',
    role_guid: 'role_guid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Role_permissionScalarFieldEnum = (typeof Role_permissionScalarFieldEnum)[keyof typeof Role_permissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TokensScalarFieldEnum: {
    guid_token: 'guid_token',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    users_guid: 'users_guid'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    guid_user: 'guid_user',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    guid_user?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    employees?: EmployeesListRelationFilter
    tokens?: TokensListRelationFilter
    role?: RoleListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    guid_user?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: employeesOrderByRelationAggregateInput
    tokens?: tokensOrderByRelationAggregateInput
    role?: roleOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    guid_user?: string
    email?: string
  }

  export type userOrderByWithAggregationInput = {
    guid_user?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    guid_user?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type tokensWhereInput = {
    AND?: Enumerable<tokensWhereInput>
    OR?: Enumerable<tokensWhereInput>
    NOT?: Enumerable<tokensWhereInput>
    guid_token?: StringFilter | string
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    users_guid?: StringFilter | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type tokensOrderByWithRelationInput = {
    guid_token?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_guid?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type tokensWhereUniqueInput = {
    guid_token?: string
    token?: string
  }

  export type tokensOrderByWithAggregationInput = {
    guid_token?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_guid?: SortOrder
    _count?: tokensCountOrderByAggregateInput
    _max?: tokensMaxOrderByAggregateInput
    _min?: tokensMinOrderByAggregateInput
  }

  export type tokensScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tokensScalarWhereWithAggregatesInput>
    OR?: Enumerable<tokensScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tokensScalarWhereWithAggregatesInput>
    guid_token?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    users_guid?: StringWithAggregatesFilter | string
  }

  export type permissionWhereInput = {
    AND?: Enumerable<permissionWhereInput>
    OR?: Enumerable<permissionWhereInput>
    NOT?: Enumerable<permissionWhereInput>
    guid_permission?: StringFilter | string
    permTitle?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatetAt?: DateTimeFilter | Date | string
    role_permission?: Role_permissionListRelationFilter
  }

  export type permissionOrderByWithRelationInput = {
    guid_permission?: SortOrder
    permTitle?: SortOrder
    createdAt?: SortOrder
    updatetAt?: SortOrder
    role_permission?: role_permissionOrderByRelationAggregateInput
  }

  export type permissionWhereUniqueInput = {
    guid_permission?: string
    permTitle?: string
  }

  export type permissionOrderByWithAggregationInput = {
    guid_permission?: SortOrder
    permTitle?: SortOrder
    createdAt?: SortOrder
    updatetAt?: SortOrder
    _count?: permissionCountOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<permissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<permissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<permissionScalarWhereWithAggregatesInput>
    guid_permission?: StringWithAggregatesFilter | string
    permTitle?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatetAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type roleWhereInput = {
    AND?: Enumerable<roleWhereInput>
    OR?: Enumerable<roleWhereInput>
    NOT?: Enumerable<roleWhereInput>
    guid_role?: StringFilter | string
    roleTitle?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user_guid?: StringFilter | string
    user?: XOR<UserRelationFilter, userWhereInput>
    role_permission?: Role_permissionListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    guid_role?: SortOrder
    roleTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
    user?: userOrderByWithRelationInput
    role_permission?: role_permissionOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = {
    guid_role?: string
    roleTitle?: string
  }

  export type roleOrderByWithAggregationInput = {
    guid_role?: SortOrder
    roleTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<roleScalarWhereWithAggregatesInput>
    OR?: Enumerable<roleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<roleScalarWhereWithAggregatesInput>
    guid_role?: StringWithAggregatesFilter | string
    roleTitle?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    user_guid?: StringWithAggregatesFilter | string
  }

  export type role_permissionWhereInput = {
    AND?: Enumerable<role_permissionWhereInput>
    OR?: Enumerable<role_permissionWhereInput>
    NOT?: Enumerable<role_permissionWhereInput>
    guid_role_perm?: StringFilter | string
    permission_guid?: StringFilter | string
    role_guid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    permission?: XOR<PermissionRelationFilter, permissionWhereInput>
    role?: XOR<RoleRelationFilter, roleWhereInput>
  }

  export type role_permissionOrderByWithRelationInput = {
    guid_role_perm?: SortOrder
    permission_guid?: SortOrder
    role_guid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permission?: permissionOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type role_permissionWhereUniqueInput = {
    guid_role_perm?: string
  }

  export type role_permissionOrderByWithAggregationInput = {
    guid_role_perm?: SortOrder
    permission_guid?: SortOrder
    role_guid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: role_permissionCountOrderByAggregateInput
    _max?: role_permissionMaxOrderByAggregateInput
    _min?: role_permissionMinOrderByAggregateInput
  }

  export type role_permissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<role_permissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<role_permissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<role_permissionScalarWhereWithAggregatesInput>
    guid_role_perm?: StringWithAggregatesFilter | string
    permission_guid?: StringWithAggregatesFilter | string
    role_guid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type departmentsWhereInput = {
    AND?: Enumerable<departmentsWhereInput>
    OR?: Enumerable<departmentsWhereInput>
    NOT?: Enumerable<departmentsWhereInput>
    guid_dept?: StringFilter | string
    deptName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dept_emp?: Dept_empListRelationFilter
  }

  export type departmentsOrderByWithRelationInput = {
    guid_dept?: SortOrder
    deptName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dept_emp?: dept_empOrderByRelationAggregateInput
  }

  export type departmentsWhereUniqueInput = {
    guid_dept?: string
    deptName?: string
  }

  export type departmentsOrderByWithAggregationInput = {
    guid_dept?: SortOrder
    deptName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<departmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<departmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<departmentsScalarWhereWithAggregatesInput>
    guid_dept?: StringWithAggregatesFilter | string
    deptName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type employeesWhereInput = {
    AND?: Enumerable<employeesWhereInput>
    OR?: Enumerable<employeesWhereInput>
    NOT?: Enumerable<employeesWhereInput>
    guid_employee?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    birthDate?: DateTimeFilter | Date | string
    hire_date?: DateTimeFilter | Date | string
    wage?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user_guid?: StringFilter | string
    dept_emp?: Dept_empListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type employeesOrderByWithRelationInput = {
    guid_employee?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hire_date?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
    dept_emp?: dept_empOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type employeesWhereUniqueInput = {
    guid_employee?: string
  }

  export type employeesOrderByWithAggregationInput = {
    guid_employee?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hire_date?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<employeesScalarWhereWithAggregatesInput>
    OR?: Enumerable<employeesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<employeesScalarWhereWithAggregatesInput>
    guid_employee?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    birthDate?: DateTimeWithAggregatesFilter | Date | string
    hire_date?: DateTimeWithAggregatesFilter | Date | string
    wage?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    user_guid?: StringWithAggregatesFilter | string
  }

  export type dept_empWhereInput = {
    AND?: Enumerable<dept_empWhereInput>
    OR?: Enumerable<dept_empWhereInput>
    NOT?: Enumerable<dept_empWhereInput>
    guid_dept_emp?: StringFilter | string
    dept_guid?: StringFilter | string
    emp_guid?: StringFilter | string
    from_date?: DateTimeFilter | Date | string
    to_date?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    departments?: XOR<DepartmentsRelationFilter, departmentsWhereInput>
    employee?: XOR<EmployeesRelationFilter, employeesWhereInput>
  }

  export type dept_empOrderByWithRelationInput = {
    guid_dept_emp?: SortOrder
    dept_guid?: SortOrder
    emp_guid?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departments?: departmentsOrderByWithRelationInput
    employee?: employeesOrderByWithRelationInput
  }

  export type dept_empWhereUniqueInput = {
    guid_dept_emp?: string
  }

  export type dept_empOrderByWithAggregationInput = {
    guid_dept_emp?: SortOrder
    dept_guid?: SortOrder
    emp_guid?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: dept_empCountOrderByAggregateInput
    _max?: dept_empMaxOrderByAggregateInput
    _min?: dept_empMinOrderByAggregateInput
  }

  export type dept_empScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dept_empScalarWhereWithAggregatesInput>
    OR?: Enumerable<dept_empScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dept_empScalarWhereWithAggregatesInput>
    guid_dept_emp?: StringWithAggregatesFilter | string
    dept_guid?: StringWithAggregatesFilter | string
    emp_guid?: StringWithAggregatesFilter | string
    from_date?: DateTimeWithAggregatesFilter | Date | string
    to_date?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userCreateInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesCreateNestedManyWithoutUserInput
    tokens?: tokensCreateNestedManyWithoutUserInput
    role?: roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesUncheckedCreateNestedManyWithoutUserInput
    tokens?: tokensUncheckedCreateNestedManyWithoutUserInput
    role?: roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUpdateManyWithoutUserNestedInput
    tokens?: tokensUpdateManyWithoutUserNestedInput
    role?: roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUncheckedUpdateManyWithoutUserNestedInput
    tokens?: tokensUncheckedUpdateManyWithoutUserNestedInput
    role?: roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensCreateInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutTokensInput
  }

  export type tokensUncheckedCreateInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users_guid: string
  }

  export type tokensUpdateInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_guid?: StringFieldUpdateOperationsInput | string
  }

  export type tokensCreateManyInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users_guid: string
  }

  export type tokensUpdateManyMutationInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateManyInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users_guid?: StringFieldUpdateOperationsInput | string
  }

  export type permissionCreateInput = {
    guid_permission?: string
    permTitle: string
    createdAt?: Date | string
    updatetAt?: Date | string
    role_permission?: role_permissionCreateNestedManyWithoutPermissionInput
  }

  export type permissionUncheckedCreateInput = {
    guid_permission?: string
    permTitle: string
    createdAt?: Date | string
    updatetAt?: Date | string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionUpdateInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permission?: role_permissionUpdateManyWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionCreateManyInput = {
    guid_permission?: string
    permTitle: string
    createdAt?: Date | string
    updatetAt?: Date | string
  }

  export type permissionUpdateManyMutationInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateManyInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutRoleInput
    role_permission?: role_permissionCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutRoleNestedInput
    role_permission?: role_permissionUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
  }

  export type roleUpdateManyMutationInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUncheckedUpdateManyInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
  }

  export type role_permissionCreateInput = {
    guid_role_perm?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: permissionCreateNestedOneWithoutRole_permissionInput
    role: roleCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateInput = {
    guid_role_perm?: string
    permission_guid: string
    role_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionUpdateInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: permissionUpdateOneRequiredWithoutRole_permissionNestedInput
    role?: roleUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    permission_guid?: StringFieldUpdateOperationsInput | string
    role_guid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateManyInput = {
    guid_role_perm?: string
    permission_guid: string
    role_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionUpdateManyMutationInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUncheckedUpdateManyInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    permission_guid?: StringFieldUpdateOperationsInput | string
    role_guid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsCreateInput = {
    guid_dept?: string
    deptName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dept_emp?: dept_empCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUncheckedCreateInput = {
    guid_dept?: string
    deptName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dept_emp?: dept_empUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type departmentsUpdateInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dept_emp?: dept_empUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsUncheckedUpdateInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dept_emp?: dept_empUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type departmentsCreateManyInput = {
    guid_dept?: string
    deptName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type departmentsUpdateManyMutationInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsUncheckedUpdateManyInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeesCreateInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dept_emp?: dept_empCreateNestedManyWithoutEmployeeInput
    user: userCreateNestedOneWithoutEmployeesInput
  }

  export type employeesUncheckedCreateInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
    dept_emp?: dept_empUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUpdateInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dept_emp?: dept_empUpdateManyWithoutEmployeeNestedInput
    user?: userUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
    dept_emp?: dept_empUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesCreateManyInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
  }

  export type employeesUpdateManyMutationInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeesUncheckedUpdateManyInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
  }

  export type dept_empCreateInput = {
    guid_dept_emp?: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments: departmentsCreateNestedOneWithoutDept_empInput
    employee: employeesCreateNestedOneWithoutDept_empInput
  }

  export type dept_empUncheckedCreateInput = {
    guid_dept_emp?: string
    dept_guid: string
    emp_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empUpdateInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: departmentsUpdateOneRequiredWithoutDept_empNestedInput
    employee?: employeesUpdateOneRequiredWithoutDept_empNestedInput
  }

  export type dept_empUncheckedUpdateInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    dept_guid?: StringFieldUpdateOperationsInput | string
    emp_guid?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dept_empCreateManyInput = {
    guid_dept_emp?: string
    dept_guid: string
    emp_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empUpdateManyMutationInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dept_empUncheckedUpdateManyInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    dept_guid?: StringFieldUpdateOperationsInput | string
    emp_guid?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EmployeesListRelationFilter = {
    every?: employeesWhereInput
    some?: employeesWhereInput
    none?: employeesWhereInput
  }

  export type TokensListRelationFilter = {
    every?: tokensWhereInput
    some?: tokensWhereInput
    none?: tokensWhereInput
  }

  export type RoleListRelationFilter = {
    every?: roleWhereInput
    some?: roleWhereInput
    none?: roleWhereInput
  }

  export type employeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    guid_user?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    guid_user?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    guid_user?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type tokensCountOrderByAggregateInput = {
    guid_token?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_guid?: SortOrder
  }

  export type tokensMaxOrderByAggregateInput = {
    guid_token?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_guid?: SortOrder
  }

  export type tokensMinOrderByAggregateInput = {
    guid_token?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users_guid?: SortOrder
  }

  export type Role_permissionListRelationFilter = {
    every?: role_permissionWhereInput
    some?: role_permissionWhereInput
    none?: role_permissionWhereInput
  }

  export type role_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type permissionCountOrderByAggregateInput = {
    guid_permission?: SortOrder
    permTitle?: SortOrder
    createdAt?: SortOrder
    updatetAt?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    guid_permission?: SortOrder
    permTitle?: SortOrder
    createdAt?: SortOrder
    updatetAt?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    guid_permission?: SortOrder
    permTitle?: SortOrder
    createdAt?: SortOrder
    updatetAt?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    guid_role?: SortOrder
    roleTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    guid_role?: SortOrder
    roleTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    guid_role?: SortOrder
    roleTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type PermissionRelationFilter = {
    is?: permissionWhereInput
    isNot?: permissionWhereInput
  }

  export type RoleRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type role_permissionCountOrderByAggregateInput = {
    guid_role_perm?: SortOrder
    permission_guid?: SortOrder
    role_guid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type role_permissionMaxOrderByAggregateInput = {
    guid_role_perm?: SortOrder
    permission_guid?: SortOrder
    role_guid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type role_permissionMinOrderByAggregateInput = {
    guid_role_perm?: SortOrder
    permission_guid?: SortOrder
    role_guid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Dept_empListRelationFilter = {
    every?: dept_empWhereInput
    some?: dept_empWhereInput
    none?: dept_empWhereInput
  }

  export type dept_empOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentsCountOrderByAggregateInput = {
    guid_dept?: SortOrder
    deptName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    guid_dept?: SortOrder
    deptName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    guid_dept?: SortOrder
    deptName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type employeesCountOrderByAggregateInput = {
    guid_employee?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hire_date?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    wage?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    guid_employee?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hire_date?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    guid_employee?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    hire_date?: SortOrder
    wage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_guid?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    wage?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DepartmentsRelationFilter = {
    is?: departmentsWhereInput
    isNot?: departmentsWhereInput
  }

  export type EmployeesRelationFilter = {
    is?: employeesWhereInput
    isNot?: employeesWhereInput
  }

  export type dept_empCountOrderByAggregateInput = {
    guid_dept_emp?: SortOrder
    dept_guid?: SortOrder
    emp_guid?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type dept_empMaxOrderByAggregateInput = {
    guid_dept_emp?: SortOrder
    dept_guid?: SortOrder
    emp_guid?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type dept_empMinOrderByAggregateInput = {
    guid_dept_emp?: SortOrder
    dept_guid?: SortOrder
    emp_guid?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type employeesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<employeesCreateWithoutUserInput>, Enumerable<employeesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<employeesCreateOrConnectWithoutUserInput>
    createMany?: employeesCreateManyUserInputEnvelope
    connect?: Enumerable<employeesWhereUniqueInput>
  }

  export type tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<tokensCreateWithoutUserInput>, Enumerable<tokensUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<tokensCreateOrConnectWithoutUserInput>
    createMany?: tokensCreateManyUserInputEnvelope
    connect?: Enumerable<tokensWhereUniqueInput>
  }

  export type roleCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<roleCreateWithoutUserInput>, Enumerable<roleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<roleCreateOrConnectWithoutUserInput>
    createMany?: roleCreateManyUserInputEnvelope
    connect?: Enumerable<roleWhereUniqueInput>
  }

  export type employeesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<employeesCreateWithoutUserInput>, Enumerable<employeesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<employeesCreateOrConnectWithoutUserInput>
    createMany?: employeesCreateManyUserInputEnvelope
    connect?: Enumerable<employeesWhereUniqueInput>
  }

  export type tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<tokensCreateWithoutUserInput>, Enumerable<tokensUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<tokensCreateOrConnectWithoutUserInput>
    createMany?: tokensCreateManyUserInputEnvelope
    connect?: Enumerable<tokensWhereUniqueInput>
  }

  export type roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<roleCreateWithoutUserInput>, Enumerable<roleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<roleCreateOrConnectWithoutUserInput>
    createMany?: roleCreateManyUserInputEnvelope
    connect?: Enumerable<roleWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type employeesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<employeesCreateWithoutUserInput>, Enumerable<employeesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<employeesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<employeesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: employeesCreateManyUserInputEnvelope
    set?: Enumerable<employeesWhereUniqueInput>
    disconnect?: Enumerable<employeesWhereUniqueInput>
    delete?: Enumerable<employeesWhereUniqueInput>
    connect?: Enumerable<employeesWhereUniqueInput>
    update?: Enumerable<employeesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<employeesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<employeesScalarWhereInput>
  }

  export type tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<tokensCreateWithoutUserInput>, Enumerable<tokensUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<tokensCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<tokensUpsertWithWhereUniqueWithoutUserInput>
    createMany?: tokensCreateManyUserInputEnvelope
    set?: Enumerable<tokensWhereUniqueInput>
    disconnect?: Enumerable<tokensWhereUniqueInput>
    delete?: Enumerable<tokensWhereUniqueInput>
    connect?: Enumerable<tokensWhereUniqueInput>
    update?: Enumerable<tokensUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<tokensUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<tokensScalarWhereInput>
  }

  export type roleUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<roleCreateWithoutUserInput>, Enumerable<roleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<roleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<roleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: roleCreateManyUserInputEnvelope
    set?: Enumerable<roleWhereUniqueInput>
    disconnect?: Enumerable<roleWhereUniqueInput>
    delete?: Enumerable<roleWhereUniqueInput>
    connect?: Enumerable<roleWhereUniqueInput>
    update?: Enumerable<roleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<roleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<roleScalarWhereInput>
  }

  export type employeesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<employeesCreateWithoutUserInput>, Enumerable<employeesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<employeesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<employeesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: employeesCreateManyUserInputEnvelope
    set?: Enumerable<employeesWhereUniqueInput>
    disconnect?: Enumerable<employeesWhereUniqueInput>
    delete?: Enumerable<employeesWhereUniqueInput>
    connect?: Enumerable<employeesWhereUniqueInput>
    update?: Enumerable<employeesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<employeesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<employeesScalarWhereInput>
  }

  export type tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<tokensCreateWithoutUserInput>, Enumerable<tokensUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<tokensCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<tokensUpsertWithWhereUniqueWithoutUserInput>
    createMany?: tokensCreateManyUserInputEnvelope
    set?: Enumerable<tokensWhereUniqueInput>
    disconnect?: Enumerable<tokensWhereUniqueInput>
    delete?: Enumerable<tokensWhereUniqueInput>
    connect?: Enumerable<tokensWhereUniqueInput>
    update?: Enumerable<tokensUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<tokensUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<tokensScalarWhereInput>
  }

  export type roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<roleCreateWithoutUserInput>, Enumerable<roleUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<roleCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<roleUpsertWithWhereUniqueWithoutUserInput>
    createMany?: roleCreateManyUserInputEnvelope
    set?: Enumerable<roleWhereUniqueInput>
    disconnect?: Enumerable<roleWhereUniqueInput>
    delete?: Enumerable<roleWhereUniqueInput>
    connect?: Enumerable<roleWhereUniqueInput>
    update?: Enumerable<roleUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<roleUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<roleScalarWhereInput>
  }

  export type userCreateNestedOneWithoutTokensInput = {
    create?: XOR<userCreateWithoutTokensInput, userUncheckedCreateWithoutTokensInput>
    connectOrCreate?: userCreateOrConnectWithoutTokensInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<userCreateWithoutTokensInput, userUncheckedCreateWithoutTokensInput>
    connectOrCreate?: userCreateOrConnectWithoutTokensInput
    upsert?: userUpsertWithoutTokensInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutTokensInput, userUncheckedUpdateWithoutTokensInput>
  }

  export type role_permissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutPermissionInput>, Enumerable<role_permissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutPermissionInput>
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: Enumerable<role_permissionWhereUniqueInput>
  }

  export type role_permissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutPermissionInput>, Enumerable<role_permissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutPermissionInput>
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: Enumerable<role_permissionWhereUniqueInput>
  }

  export type role_permissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutPermissionInput>, Enumerable<role_permissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<role_permissionUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: Enumerable<role_permissionWhereUniqueInput>
    disconnect?: Enumerable<role_permissionWhereUniqueInput>
    delete?: Enumerable<role_permissionWhereUniqueInput>
    connect?: Enumerable<role_permissionWhereUniqueInput>
    update?: Enumerable<role_permissionUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<role_permissionUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<role_permissionScalarWhereInput>
  }

  export type role_permissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutPermissionInput>, Enumerable<role_permissionUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<role_permissionUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: Enumerable<role_permissionWhereUniqueInput>
    disconnect?: Enumerable<role_permissionWhereUniqueInput>
    delete?: Enumerable<role_permissionWhereUniqueInput>
    connect?: Enumerable<role_permissionWhereUniqueInput>
    update?: Enumerable<role_permissionUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<role_permissionUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<role_permissionScalarWhereInput>
  }

  export type userCreateNestedOneWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
    connectOrCreate?: userCreateOrConnectWithoutRoleInput
    connect?: userWhereUniqueInput
  }

  export type role_permissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutRoleInput>, Enumerable<role_permissionUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutRoleInput>
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: Enumerable<role_permissionWhereUniqueInput>
  }

  export type role_permissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutRoleInput>, Enumerable<role_permissionUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutRoleInput>
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: Enumerable<role_permissionWhereUniqueInput>
  }

  export type userUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
    connectOrCreate?: userCreateOrConnectWithoutRoleInput
    upsert?: userUpsertWithoutRoleInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutRoleInput>, Enumerable<role_permissionUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<role_permissionUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: Enumerable<role_permissionWhereUniqueInput>
    disconnect?: Enumerable<role_permissionWhereUniqueInput>
    delete?: Enumerable<role_permissionWhereUniqueInput>
    connect?: Enumerable<role_permissionWhereUniqueInput>
    update?: Enumerable<role_permissionUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<role_permissionUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<role_permissionScalarWhereInput>
  }

  export type role_permissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Enumerable<role_permissionCreateWithoutRoleInput>, Enumerable<role_permissionUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<role_permissionCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<role_permissionUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: Enumerable<role_permissionWhereUniqueInput>
    disconnect?: Enumerable<role_permissionWhereUniqueInput>
    delete?: Enumerable<role_permissionWhereUniqueInput>
    connect?: Enumerable<role_permissionWhereUniqueInput>
    update?: Enumerable<role_permissionUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<role_permissionUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<role_permissionScalarWhereInput>
  }

  export type permissionCreateNestedOneWithoutRole_permissionInput = {
    create?: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionInput
    connect?: permissionWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutRole_permissionInput = {
    create?: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionInput
    connect?: roleWhereUniqueInput
  }

  export type permissionUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionInput
    upsert?: permissionUpsertWithoutRole_permissionInput
    connect?: permissionWhereUniqueInput
    update?: XOR<permissionUpdateWithoutRole_permissionInput, permissionUncheckedUpdateWithoutRole_permissionInput>
  }

  export type roleUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionInput
    upsert?: roleUpsertWithoutRole_permissionInput
    connect?: roleWhereUniqueInput
    update?: XOR<roleUpdateWithoutRole_permissionInput, roleUncheckedUpdateWithoutRole_permissionInput>
  }

  export type dept_empCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutDepartmentsInput>, Enumerable<dept_empUncheckedCreateWithoutDepartmentsInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutDepartmentsInput>
    createMany?: dept_empCreateManyDepartmentsInputEnvelope
    connect?: Enumerable<dept_empWhereUniqueInput>
  }

  export type dept_empUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutDepartmentsInput>, Enumerable<dept_empUncheckedCreateWithoutDepartmentsInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutDepartmentsInput>
    createMany?: dept_empCreateManyDepartmentsInputEnvelope
    connect?: Enumerable<dept_empWhereUniqueInput>
  }

  export type dept_empUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutDepartmentsInput>, Enumerable<dept_empUncheckedCreateWithoutDepartmentsInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutDepartmentsInput>
    upsert?: Enumerable<dept_empUpsertWithWhereUniqueWithoutDepartmentsInput>
    createMany?: dept_empCreateManyDepartmentsInputEnvelope
    set?: Enumerable<dept_empWhereUniqueInput>
    disconnect?: Enumerable<dept_empWhereUniqueInput>
    delete?: Enumerable<dept_empWhereUniqueInput>
    connect?: Enumerable<dept_empWhereUniqueInput>
    update?: Enumerable<dept_empUpdateWithWhereUniqueWithoutDepartmentsInput>
    updateMany?: Enumerable<dept_empUpdateManyWithWhereWithoutDepartmentsInput>
    deleteMany?: Enumerable<dept_empScalarWhereInput>
  }

  export type dept_empUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutDepartmentsInput>, Enumerable<dept_empUncheckedCreateWithoutDepartmentsInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutDepartmentsInput>
    upsert?: Enumerable<dept_empUpsertWithWhereUniqueWithoutDepartmentsInput>
    createMany?: dept_empCreateManyDepartmentsInputEnvelope
    set?: Enumerable<dept_empWhereUniqueInput>
    disconnect?: Enumerable<dept_empWhereUniqueInput>
    delete?: Enumerable<dept_empWhereUniqueInput>
    connect?: Enumerable<dept_empWhereUniqueInput>
    update?: Enumerable<dept_empUpdateWithWhereUniqueWithoutDepartmentsInput>
    updateMany?: Enumerable<dept_empUpdateManyWithWhereWithoutDepartmentsInput>
    deleteMany?: Enumerable<dept_empScalarWhereInput>
  }

  export type dept_empCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutEmployeeInput>, Enumerable<dept_empUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutEmployeeInput>
    createMany?: dept_empCreateManyEmployeeInputEnvelope
    connect?: Enumerable<dept_empWhereUniqueInput>
  }

  export type userCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<userCreateWithoutEmployeesInput, userUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: userCreateOrConnectWithoutEmployeesInput
    connect?: userWhereUniqueInput
  }

  export type dept_empUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutEmployeeInput>, Enumerable<dept_empUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutEmployeeInput>
    createMany?: dept_empCreateManyEmployeeInputEnvelope
    connect?: Enumerable<dept_empWhereUniqueInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dept_empUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutEmployeeInput>, Enumerable<dept_empUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<dept_empUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: dept_empCreateManyEmployeeInputEnvelope
    set?: Enumerable<dept_empWhereUniqueInput>
    disconnect?: Enumerable<dept_empWhereUniqueInput>
    delete?: Enumerable<dept_empWhereUniqueInput>
    connect?: Enumerable<dept_empWhereUniqueInput>
    update?: Enumerable<dept_empUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<dept_empUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<dept_empScalarWhereInput>
  }

  export type userUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<userCreateWithoutEmployeesInput, userUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: userCreateOrConnectWithoutEmployeesInput
    upsert?: userUpsertWithoutEmployeesInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutEmployeesInput, userUncheckedUpdateWithoutEmployeesInput>
  }

  export type dept_empUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<dept_empCreateWithoutEmployeeInput>, Enumerable<dept_empUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<dept_empCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<dept_empUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: dept_empCreateManyEmployeeInputEnvelope
    set?: Enumerable<dept_empWhereUniqueInput>
    disconnect?: Enumerable<dept_empWhereUniqueInput>
    delete?: Enumerable<dept_empWhereUniqueInput>
    connect?: Enumerable<dept_empWhereUniqueInput>
    update?: Enumerable<dept_empUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<dept_empUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<dept_empScalarWhereInput>
  }

  export type departmentsCreateNestedOneWithoutDept_empInput = {
    create?: XOR<departmentsCreateWithoutDept_empInput, departmentsUncheckedCreateWithoutDept_empInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutDept_empInput
    connect?: departmentsWhereUniqueInput
  }

  export type employeesCreateNestedOneWithoutDept_empInput = {
    create?: XOR<employeesCreateWithoutDept_empInput, employeesUncheckedCreateWithoutDept_empInput>
    connectOrCreate?: employeesCreateOrConnectWithoutDept_empInput
    connect?: employeesWhereUniqueInput
  }

  export type departmentsUpdateOneRequiredWithoutDept_empNestedInput = {
    create?: XOR<departmentsCreateWithoutDept_empInput, departmentsUncheckedCreateWithoutDept_empInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutDept_empInput
    upsert?: departmentsUpsertWithoutDept_empInput
    connect?: departmentsWhereUniqueInput
    update?: XOR<departmentsUpdateWithoutDept_empInput, departmentsUncheckedUpdateWithoutDept_empInput>
  }

  export type employeesUpdateOneRequiredWithoutDept_empNestedInput = {
    create?: XOR<employeesCreateWithoutDept_empInput, employeesUncheckedCreateWithoutDept_empInput>
    connectOrCreate?: employeesCreateOrConnectWithoutDept_empInput
    upsert?: employeesUpsertWithoutDept_empInput
    connect?: employeesWhereUniqueInput
    update?: XOR<employeesUpdateWithoutDept_empInput, employeesUncheckedUpdateWithoutDept_empInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type employeesCreateWithoutUserInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dept_emp?: dept_empCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutUserInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dept_emp?: dept_empUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutUserInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutUserInput, employeesUncheckedCreateWithoutUserInput>
  }

  export type employeesCreateManyUserInputEnvelope = {
    data: Enumerable<employeesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type tokensCreateWithoutUserInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tokensUncheckedCreateWithoutUserInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tokensCreateOrConnectWithoutUserInput = {
    where: tokensWhereUniqueInput
    create: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput>
  }

  export type tokensCreateManyUserInputEnvelope = {
    data: Enumerable<tokensCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type roleCreateWithoutUserInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role_permission?: role_permissionCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutUserInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type roleCreateManyUserInputEnvelope = {
    data: Enumerable<roleCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type employeesUpsertWithWhereUniqueWithoutUserInput = {
    where: employeesWhereUniqueInput
    update: XOR<employeesUpdateWithoutUserInput, employeesUncheckedUpdateWithoutUserInput>
    create: XOR<employeesCreateWithoutUserInput, employeesUncheckedCreateWithoutUserInput>
  }

  export type employeesUpdateWithWhereUniqueWithoutUserInput = {
    where: employeesWhereUniqueInput
    data: XOR<employeesUpdateWithoutUserInput, employeesUncheckedUpdateWithoutUserInput>
  }

  export type employeesUpdateManyWithWhereWithoutUserInput = {
    where: employeesScalarWhereInput
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type employeesScalarWhereInput = {
    AND?: Enumerable<employeesScalarWhereInput>
    OR?: Enumerable<employeesScalarWhereInput>
    NOT?: Enumerable<employeesScalarWhereInput>
    guid_employee?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    birthDate?: DateTimeFilter | Date | string
    hire_date?: DateTimeFilter | Date | string
    wage?: DecimalFilter | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user_guid?: StringFilter | string
  }

  export type tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: tokensWhereUniqueInput
    update: XOR<tokensUpdateWithoutUserInput, tokensUncheckedUpdateWithoutUserInput>
    create: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput>
  }

  export type tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: tokensWhereUniqueInput
    data: XOR<tokensUpdateWithoutUserInput, tokensUncheckedUpdateWithoutUserInput>
  }

  export type tokensUpdateManyWithWhereWithoutUserInput = {
    where: tokensScalarWhereInput
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyWithoutTokensInput>
  }

  export type tokensScalarWhereInput = {
    AND?: Enumerable<tokensScalarWhereInput>
    OR?: Enumerable<tokensScalarWhereInput>
    NOT?: Enumerable<tokensScalarWhereInput>
    guid_token?: StringFilter | string
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    users_guid?: StringFilter | string
  }

  export type roleUpsertWithWhereUniqueWithoutUserInput = {
    where: roleWhereUniqueInput
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type roleUpdateWithWhereUniqueWithoutUserInput = {
    where: roleWhereUniqueInput
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateManyWithWhereWithoutUserInput = {
    where: roleScalarWhereInput
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type roleScalarWhereInput = {
    AND?: Enumerable<roleScalarWhereInput>
    OR?: Enumerable<roleScalarWhereInput>
    NOT?: Enumerable<roleScalarWhereInput>
    guid_role?: StringFilter | string
    roleTitle?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user_guid?: StringFilter | string
  }

  export type userCreateWithoutTokensInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesCreateNestedManyWithoutUserInput
    role?: roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTokensInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesUncheckedCreateNestedManyWithoutUserInput
    role?: roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTokensInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTokensInput, userUncheckedCreateWithoutTokensInput>
  }

  export type userUpsertWithoutTokensInput = {
    update: XOR<userUpdateWithoutTokensInput, userUncheckedUpdateWithoutTokensInput>
    create: XOR<userCreateWithoutTokensInput, userUncheckedCreateWithoutTokensInput>
  }

  export type userUpdateWithoutTokensInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUpdateManyWithoutUserNestedInput
    role?: roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTokensInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUncheckedUpdateManyWithoutUserNestedInput
    role?: roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type role_permissionCreateWithoutPermissionInput = {
    guid_role_perm?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: roleCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateWithoutPermissionInput = {
    guid_role_perm?: string
    role_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionCreateOrConnectWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionCreateManyPermissionInputEnvelope = {
    data: Enumerable<role_permissionCreateManyPermissionInput>
    skipDuplicates?: boolean
  }

  export type role_permissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutPermissionInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutRole_permissionInput>
  }

  export type role_permissionScalarWhereInput = {
    AND?: Enumerable<role_permissionScalarWhereInput>
    OR?: Enumerable<role_permissionScalarWhereInput>
    NOT?: Enumerable<role_permissionScalarWhereInput>
    guid_role_perm?: StringFilter | string
    permission_guid?: StringFilter | string
    role_guid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type userCreateWithoutRoleInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesCreateNestedManyWithoutUserInput
    tokens?: tokensCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoleInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: employeesUncheckedCreateNestedManyWithoutUserInput
    tokens?: tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionCreateWithoutRoleInput = {
    guid_role_perm?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permission: permissionCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateWithoutRoleInput = {
    guid_role_perm?: string
    permission_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionCreateOrConnectWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionCreateManyRoleInputEnvelope = {
    data: Enumerable<role_permissionCreateManyRoleInput>
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutRoleInput = {
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithoutRoleInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUpdateManyWithoutUserNestedInput
    tokens?: tokensUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: employeesUncheckedUpdateManyWithoutUserNestedInput
    tokens?: tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type role_permissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutRoleInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutRole_permissionInput>
  }

  export type permissionCreateWithoutRole_permissionInput = {
    guid_permission?: string
    permTitle: string
    createdAt?: Date | string
    updatetAt?: Date | string
  }

  export type permissionUncheckedCreateWithoutRole_permissionInput = {
    guid_permission?: string
    permTitle: string
    createdAt?: Date | string
    updatetAt?: Date | string
  }

  export type permissionCreateOrConnectWithoutRole_permissionInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
  }

  export type roleCreateWithoutRole_permissionInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutRole_permissionInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
  }

  export type roleCreateOrConnectWithoutRole_permissionInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
  }

  export type permissionUpsertWithoutRole_permissionInput = {
    update: XOR<permissionUpdateWithoutRole_permissionInput, permissionUncheckedUpdateWithoutRole_permissionInput>
    create: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
  }

  export type permissionUpdateWithoutRole_permissionInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateWithoutRole_permissionInput = {
    guid_permission?: StringFieldUpdateOperationsInput | string
    permTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatetAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUpsertWithoutRole_permissionInput = {
    update: XOR<roleUpdateWithoutRole_permissionInput, roleUncheckedUpdateWithoutRole_permissionInput>
    create: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
  }

  export type roleUpdateWithoutRole_permissionInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutRole_permissionInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
  }

  export type dept_empCreateWithoutDepartmentsInput = {
    guid_dept_emp?: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: employeesCreateNestedOneWithoutDept_empInput
  }

  export type dept_empUncheckedCreateWithoutDepartmentsInput = {
    guid_dept_emp?: string
    emp_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empCreateOrConnectWithoutDepartmentsInput = {
    where: dept_empWhereUniqueInput
    create: XOR<dept_empCreateWithoutDepartmentsInput, dept_empUncheckedCreateWithoutDepartmentsInput>
  }

  export type dept_empCreateManyDepartmentsInputEnvelope = {
    data: Enumerable<dept_empCreateManyDepartmentsInput>
    skipDuplicates?: boolean
  }

  export type dept_empUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: dept_empWhereUniqueInput
    update: XOR<dept_empUpdateWithoutDepartmentsInput, dept_empUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<dept_empCreateWithoutDepartmentsInput, dept_empUncheckedCreateWithoutDepartmentsInput>
  }

  export type dept_empUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: dept_empWhereUniqueInput
    data: XOR<dept_empUpdateWithoutDepartmentsInput, dept_empUncheckedUpdateWithoutDepartmentsInput>
  }

  export type dept_empUpdateManyWithWhereWithoutDepartmentsInput = {
    where: dept_empScalarWhereInput
    data: XOR<dept_empUpdateManyMutationInput, dept_empUncheckedUpdateManyWithoutDept_empInput>
  }

  export type dept_empScalarWhereInput = {
    AND?: Enumerable<dept_empScalarWhereInput>
    OR?: Enumerable<dept_empScalarWhereInput>
    NOT?: Enumerable<dept_empScalarWhereInput>
    guid_dept_emp?: StringFilter | string
    dept_guid?: StringFilter | string
    emp_guid?: StringFilter | string
    from_date?: DateTimeFilter | Date | string
    to_date?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type dept_empCreateWithoutEmployeeInput = {
    guid_dept_emp?: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    departments: departmentsCreateNestedOneWithoutDept_empInput
  }

  export type dept_empUncheckedCreateWithoutEmployeeInput = {
    guid_dept_emp?: string
    dept_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empCreateOrConnectWithoutEmployeeInput = {
    where: dept_empWhereUniqueInput
    create: XOR<dept_empCreateWithoutEmployeeInput, dept_empUncheckedCreateWithoutEmployeeInput>
  }

  export type dept_empCreateManyEmployeeInputEnvelope = {
    data: Enumerable<dept_empCreateManyEmployeeInput>
    skipDuplicates?: boolean
  }

  export type userCreateWithoutEmployeesInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: tokensCreateNestedManyWithoutUserInput
    role?: roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutEmployeesInput = {
    guid_user?: string
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: tokensUncheckedCreateNestedManyWithoutUserInput
    role?: roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutEmployeesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEmployeesInput, userUncheckedCreateWithoutEmployeesInput>
  }

  export type dept_empUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: dept_empWhereUniqueInput
    update: XOR<dept_empUpdateWithoutEmployeeInput, dept_empUncheckedUpdateWithoutEmployeeInput>
    create: XOR<dept_empCreateWithoutEmployeeInput, dept_empUncheckedCreateWithoutEmployeeInput>
  }

  export type dept_empUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: dept_empWhereUniqueInput
    data: XOR<dept_empUpdateWithoutEmployeeInput, dept_empUncheckedUpdateWithoutEmployeeInput>
  }

  export type dept_empUpdateManyWithWhereWithoutEmployeeInput = {
    where: dept_empScalarWhereInput
    data: XOR<dept_empUpdateManyMutationInput, dept_empUncheckedUpdateManyWithoutDept_empInput>
  }

  export type userUpsertWithoutEmployeesInput = {
    update: XOR<userUpdateWithoutEmployeesInput, userUncheckedUpdateWithoutEmployeesInput>
    create: XOR<userCreateWithoutEmployeesInput, userUncheckedCreateWithoutEmployeesInput>
  }

  export type userUpdateWithoutEmployeesInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: tokensUpdateManyWithoutUserNestedInput
    role?: roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutEmployeesInput = {
    guid_user?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: tokensUncheckedUpdateManyWithoutUserNestedInput
    role?: roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type departmentsCreateWithoutDept_empInput = {
    guid_dept?: string
    deptName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type departmentsUncheckedCreateWithoutDept_empInput = {
    guid_dept?: string
    deptName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type departmentsCreateOrConnectWithoutDept_empInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutDept_empInput, departmentsUncheckedCreateWithoutDept_empInput>
  }

  export type employeesCreateWithoutDept_empInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutDept_empInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_guid: string
  }

  export type employeesCreateOrConnectWithoutDept_empInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutDept_empInput, employeesUncheckedCreateWithoutDept_empInput>
  }

  export type departmentsUpsertWithoutDept_empInput = {
    update: XOR<departmentsUpdateWithoutDept_empInput, departmentsUncheckedUpdateWithoutDept_empInput>
    create: XOR<departmentsCreateWithoutDept_empInput, departmentsUncheckedCreateWithoutDept_empInput>
  }

  export type departmentsUpdateWithoutDept_empInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsUncheckedUpdateWithoutDept_empInput = {
    guid_dept?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeesUpsertWithoutDept_empInput = {
    update: XOR<employeesUpdateWithoutDept_empInput, employeesUncheckedUpdateWithoutDept_empInput>
    create: XOR<employeesCreateWithoutDept_empInput, employeesUncheckedCreateWithoutDept_empInput>
  }

  export type employeesUpdateWithoutDept_empInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutDept_empInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_guid?: StringFieldUpdateOperationsInput | string
  }

  export type employeesCreateManyUserInput = {
    guid_employee?: string
    firstName: string
    lastName: string
    birthDate: Date | string
    hire_date: Date | string
    wage: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tokensCreateManyUserInput = {
    guid_token?: string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roleCreateManyUserInput = {
    guid_role?: string
    roleTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type employeesUpdateWithoutUserInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dept_emp?: dept_empUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutUserInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dept_emp?: dept_empUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateManyWithoutEmployeesInput = {
    guid_employee?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUpdateWithoutUserInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateWithoutUserInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateManyWithoutTokensInput = {
    guid_token?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUpdateWithoutUserInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permission?: role_permissionUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutUserInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateManyWithoutRoleInput = {
    guid_role?: StringFieldUpdateOperationsInput | string
    roleTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateManyPermissionInput = {
    guid_role_perm?: string
    role_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionUpdateWithoutPermissionInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutPermissionInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    role_guid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionUncheckedUpdateManyWithoutRole_permissionInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    role_guid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionCreateManyRoleInput = {
    guid_role_perm?: string
    permission_guid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type role_permissionUpdateWithoutRoleInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: permissionUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutRoleInput = {
    guid_role_perm?: StringFieldUpdateOperationsInput | string
    permission_guid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dept_empCreateManyDepartmentsInput = {
    guid_dept_emp?: string
    emp_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empUpdateWithoutDepartmentsInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: employeesUpdateOneRequiredWithoutDept_empNestedInput
  }

  export type dept_empUncheckedUpdateWithoutDepartmentsInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    emp_guid?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dept_empUncheckedUpdateManyWithoutDept_empInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    emp_guid?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dept_empCreateManyEmployeeInput = {
    guid_dept_emp?: string
    dept_guid: string
    from_date: Date | string
    to_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type dept_empUpdateWithoutEmployeeInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: departmentsUpdateOneRequiredWithoutDept_empNestedInput
  }

  export type dept_empUncheckedUpdateWithoutEmployeeInput = {
    guid_dept_emp?: StringFieldUpdateOperationsInput | string
    dept_guid?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}