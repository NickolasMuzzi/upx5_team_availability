
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model answers
 * 
 */
export type answers = $Result.DefaultSelection<Prisma.$answersPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model form
 * 
 */
export type form = $Result.DefaultSelection<Prisma.$formPayload>
/**
 * Model form_questions
 * 
 */
export type form_questions = $Result.DefaultSelection<Prisma.$form_questionsPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model work_regime
 * 
 */
export type work_regime = $Result.DefaultSelection<Prisma.$work_regimePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.formDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form_questions`: Exposes CRUD operations for the **form_questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Form_questions
    * const form_questions = await prisma.form_questions.findMany()
    * ```
    */
  get form_questions(): Prisma.form_questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_regime`: Exposes CRUD operations for the **work_regime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_regimes
    * const work_regimes = await prisma.work_regime.findMany()
    * ```
    */
  get work_regime(): Prisma.work_regimeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    answers: 'answers',
    company: 'company',
    form: 'form',
    form_questions: 'form_questions',
    questions: 'questions',
    users: 'users',
    work_regime: 'work_regime'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answers" | "company" | "form" | "form_questions" | "questions" | "users" | "work_regime"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      answers: {
        payload: Prisma.$answersPayload<ExtArgs>
        fields: Prisma.answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findFirst: {
            args: Prisma.answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findMany: {
            args: Prisma.answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          create: {
            args: Prisma.answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          createMany: {
            args: Prisma.answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          delete: {
            args: Prisma.answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          update: {
            args: Prisma.answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          deleteMany: {
            args: Prisma.answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          upsert: {
            args: Prisma.answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.answersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      form: {
        payload: Prisma.$formPayload<ExtArgs>
        fields: Prisma.formFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          findFirst: {
            args: Prisma.formFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          findMany: {
            args: Prisma.formFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>[]
          }
          create: {
            args: Prisma.formCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          createMany: {
            args: Prisma.formCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>[]
          }
          delete: {
            args: Prisma.formDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          update: {
            args: Prisma.formUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          deleteMany: {
            args: Prisma.formDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>[]
          }
          upsert: {
            args: Prisma.formUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.formGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.formCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      form_questions: {
        payload: Prisma.$form_questionsPayload<ExtArgs>
        fields: Prisma.form_questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.form_questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.form_questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          findFirst: {
            args: Prisma.form_questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.form_questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          findMany: {
            args: Prisma.form_questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>[]
          }
          create: {
            args: Prisma.form_questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          createMany: {
            args: Prisma.form_questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.form_questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>[]
          }
          delete: {
            args: Prisma.form_questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          update: {
            args: Prisma.form_questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          deleteMany: {
            args: Prisma.form_questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.form_questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.form_questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>[]
          }
          upsert: {
            args: Prisma.form_questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$form_questionsPayload>
          }
          aggregate: {
            args: Prisma.Form_questionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm_questions>
          }
          groupBy: {
            args: Prisma.form_questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Form_questionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.form_questionsCountArgs<ExtArgs>
            result: $Utils.Optional<Form_questionsCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      work_regime: {
        payload: Prisma.$work_regimePayload<ExtArgs>
        fields: Prisma.work_regimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_regimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_regimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          findFirst: {
            args: Prisma.work_regimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_regimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          findMany: {
            args: Prisma.work_regimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>[]
          }
          create: {
            args: Prisma.work_regimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          createMany: {
            args: Prisma.work_regimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_regimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>[]
          }
          delete: {
            args: Prisma.work_regimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          update: {
            args: Prisma.work_regimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          deleteMany: {
            args: Prisma.work_regimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_regimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_regimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>[]
          }
          upsert: {
            args: Prisma.work_regimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_regimePayload>
          }
          aggregate: {
            args: Prisma.Work_regimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_regime>
          }
          groupBy: {
            args: Prisma.work_regimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_regimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_regimeCountArgs<ExtArgs>
            result: $Utils.Optional<Work_regimeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    answers?: answersOmit
    company?: companyOmit
    form?: formOmit
    form_questions?: form_questionsOmit
    questions?: questionsOmit
    users?: usersOmit
    work_regime?: work_regimeOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    form: number
    users: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | CompanyCountOutputTypeCountFormArgs
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    answers: number
    form_questions: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FormCountOutputTypeCountAnswersArgs
    form_questions?: boolean | FormCountOutputTypeCountForm_questionsArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountForm_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: form_questionsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    form_questions: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_questions?: boolean | QuestionsCountOutputTypeCountForm_questionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountForm_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: form_questionsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    answers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UsersCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }


  /**
   * Count Type Work_regimeCountOutputType
   */

  export type Work_regimeCountOutputType = {
    users_users_work_regimeTowork_regime: number
  }

  export type Work_regimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_users_work_regimeTowork_regime?: boolean | Work_regimeCountOutputTypeCountUsers_users_work_regimeTowork_regimeArgs
  }

  // Custom InputTypes
  /**
   * Work_regimeCountOutputType without action
   */
  export type Work_regimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work_regimeCountOutputType
     */
    select?: Work_regimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Work_regimeCountOutputType without action
   */
  export type Work_regimeCountOutputTypeCountUsers_users_work_regimeTowork_regimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    form_id: string | null
    send_date: Date | null
    created_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    form_id: string | null
    send_date: Date | null
    created_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    user_id: number
    form_id: number
    send_date: number
    created_at: number
    _all: number
  }


  export type AnswersMinAggregateInputType = {
    id?: true
    user_id?: true
    form_id?: true
    send_date?: true
    created_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    user_id?: true
    form_id?: true
    send_date?: true
    created_at?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    user_id?: true
    form_id?: true
    send_date?: true
    created_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to aggregate.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
    orderBy?: answersOrderByWithAggregationInput | answersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: string
    user_id: string | null
    form_id: string | null
    send_date: Date | null
    created_at: Date | null
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    form_id?: boolean
    send_date?: boolean
    created_at?: boolean
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    form_id?: boolean
    send_date?: boolean
    created_at?: boolean
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    form_id?: boolean
    send_date?: boolean
    created_at?: boolean
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectScalar = {
    id?: boolean
    user_id?: boolean
    form_id?: boolean
    send_date?: boolean
    created_at?: boolean
  }

  export type answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "form_id" | "send_date" | "created_at", ExtArgs["result"]["answers"]>
  export type answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }
  export type answersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }
  export type answersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | answers$formArgs<ExtArgs>
    users?: boolean | answers$usersArgs<ExtArgs>
  }

  export type $answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answers"
    objects: {
      form: Prisma.$formPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      form_id: string | null
      send_date: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type answersGetPayload<S extends boolean | null | undefined | answersDefaultArgs> = $Result.GetResult<Prisma.$answersPayload, S>

  type answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answers'], meta: { name: 'answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answersFindUniqueArgs>(args: SelectSubset<T, answersFindUniqueArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(args: SelectSubset<T, answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answersFindFirstArgs>(args?: SelectSubset<T, answersFindFirstArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(args?: SelectSubset<T, answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answersFindManyArgs>(args?: SelectSubset<T, answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends answersCreateArgs>(args: SelectSubset<T, answersCreateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answersCreateManyArgs>(args?: SelectSubset<T, answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {answersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answersCreateManyAndReturnArgs>(args?: SelectSubset<T, answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends answersDeleteArgs>(args: SelectSubset<T, answersDeleteArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answersUpdateArgs>(args: SelectSubset<T, answersUpdateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answersDeleteManyArgs>(args?: SelectSubset<T, answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answersUpdateManyArgs>(args: SelectSubset<T, answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {answersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends answersUpdateManyAndReturnArgs>(args: SelectSubset<T, answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends answersUpsertArgs>(args: SelectSubset<T, answersUpsertArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersGroupByArgs} args - Group by arguments.
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
      T extends answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answersGroupByArgs['orderBy'] }
        : { orderBy?: answersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answers model
   */
  readonly fields: answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends answers$formArgs<ExtArgs> = {}>(args?: Subset<T, answers$formArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends answers$usersArgs<ExtArgs> = {}>(args?: Subset<T, answers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answers model
   */
  interface answersFieldRefs {
    readonly id: FieldRef<"answers", 'String'>
    readonly user_id: FieldRef<"answers", 'String'>
    readonly form_id: FieldRef<"answers", 'String'>
    readonly send_date: FieldRef<"answers", 'DateTime'>
    readonly created_at: FieldRef<"answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * answers findUnique
   */
  export type answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findFirst
   */
  export type answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findMany
   */
  export type answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers create
   */
  export type answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to create a answers.
     */
    data?: XOR<answersCreateInput, answersUncheckedCreateInput>
  }

  /**
   * answers createMany
   */
  export type answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answers createManyAndReturn
   */
  export type answersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers update
   */
  export type answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to update a answers.
     */
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answers updateManyAndReturn
   */
  export type answersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers upsert
   */
  export type answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The filter to search for the answers to update in case it exists.
     */
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     */
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }

  /**
   * answers delete
   */
  export type answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter which answers to delete.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answers.form
   */
  export type answers$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    where?: formWhereInput
  }

  /**
   * answers.users
   */
  export type answers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * answers without action
   */
  export type answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    category: string | null
    forms: string | null
    created_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    category: string | null
    forms: string | null
    created_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    category: number
    forms: number
    created_at: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    category?: true
    forms?: true
    created_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    category?: true
    forms?: true
    created_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    category?: true
    forms?: true
    created_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string | null
    cnpj: string | null
    category: string | null
    forms: string | null
    created_at: Date | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    category?: boolean
    forms?: boolean
    created_at?: boolean
    form?: boolean | company$formArgs<ExtArgs>
    users?: boolean | company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    category?: boolean
    forms?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    category?: boolean
    forms?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    category?: boolean
    forms?: boolean
    created_at?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cnpj" | "category" | "forms" | "created_at", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | company$formArgs<ExtArgs>
    users?: boolean | company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      form: Prisma.$formPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      cnpj: string | null
      category: string | null
      forms: string | null
      created_at: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends company$formArgs<ExtArgs> = {}>(args?: Subset<T, company$formArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends company$usersArgs<ExtArgs> = {}>(args?: Subset<T, company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly name: FieldRef<"company", 'String'>
    readonly cnpj: FieldRef<"company", 'String'>
    readonly category: FieldRef<"company", 'String'>
    readonly forms: FieldRef<"company", 'String'>
    readonly created_at: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data?: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.form
   */
  export type company$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    where?: formWhereInput
    orderBy?: formOrderByWithRelationInput | formOrderByWithRelationInput[]
    cursor?: formWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * company.users
   */
  export type company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    title: string | null
    company_id: string | null
    created_at: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company_id: string | null
    created_at: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    title: number
    company_id: number
    created_at: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    title?: true
    company_id?: true
    created_at?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    title?: true
    company_id?: true
    created_at?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    title?: true
    company_id?: true
    created_at?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which form to aggregate.
     */
    where?: formWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formOrderByWithRelationInput | formOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type formGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formWhereInput
    orderBy?: formOrderByWithAggregationInput | formOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: formScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    title: string | null
    company_id: string | null
    created_at: Date | null
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends formGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type formSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company_id?: boolean
    created_at?: boolean
    answers?: boolean | form$answersArgs<ExtArgs>
    company?: boolean | form$companyArgs<ExtArgs>
    form_questions?: boolean | form$form_questionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type formSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company_id?: boolean
    created_at?: boolean
    company?: boolean | form$companyArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type formSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company_id?: boolean
    created_at?: boolean
    company?: boolean | form$companyArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type formSelectScalar = {
    id?: boolean
    title?: boolean
    company_id?: boolean
    created_at?: boolean
  }

  export type formOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company_id" | "created_at", ExtArgs["result"]["form"]>
  export type formInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | form$answersArgs<ExtArgs>
    company?: boolean | form$companyArgs<ExtArgs>
    form_questions?: boolean | form$form_questionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | form$companyArgs<ExtArgs>
  }
  export type formIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | form$companyArgs<ExtArgs>
  }

  export type $formPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "form"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs> | null
      form_questions: Prisma.$form_questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      company_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type formGetPayload<S extends boolean | null | undefined | formDefaultArgs> = $Result.GetResult<Prisma.$formPayload, S>

  type formCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface formDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['form'], meta: { name: 'form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {formFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formFindUniqueArgs>(args: SelectSubset<T, formFindUniqueArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formFindUniqueOrThrowArgs>(args: SelectSubset<T, formFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formFindFirstArgs>(args?: SelectSubset<T, formFindFirstArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formFindFirstOrThrowArgs>(args?: SelectSubset<T, formFindFirstOrThrowArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends formFindManyArgs>(args?: SelectSubset<T, formFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {formCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends formCreateArgs>(args: SelectSubset<T, formCreateArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {formCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formCreateManyArgs>(args?: SelectSubset<T, formCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {formCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formCreateManyAndReturnArgs>(args?: SelectSubset<T, formCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {formDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends formDeleteArgs>(args: SelectSubset<T, formDeleteArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {formUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formUpdateArgs>(args: SelectSubset<T, formUpdateArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {formDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formDeleteManyArgs>(args?: SelectSubset<T, formDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formUpdateManyArgs>(args: SelectSubset<T, formUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {formUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formUpdateManyAndReturnArgs>(args: SelectSubset<T, formUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {formUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends formUpsertArgs>(args: SelectSubset<T, formUpsertArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends formCountArgs>(
      args?: Subset<T, formCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formGroupByArgs} args - Group by arguments.
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
      T extends formGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formGroupByArgs['orderBy'] }
        : { orderBy?: formGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, formGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the form model
   */
  readonly fields: formFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends form$answersArgs<ExtArgs> = {}>(args?: Subset<T, form$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends form$companyArgs<ExtArgs> = {}>(args?: Subset<T, form$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    form_questions<T extends form$form_questionsArgs<ExtArgs> = {}>(args?: Subset<T, form$form_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the form model
   */
  interface formFieldRefs {
    readonly id: FieldRef<"form", 'String'>
    readonly title: FieldRef<"form", 'String'>
    readonly company_id: FieldRef<"form", 'String'>
    readonly created_at: FieldRef<"form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * form findUnique
   */
  export type formFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter, which form to fetch.
     */
    where: formWhereUniqueInput
  }

  /**
   * form findUniqueOrThrow
   */
  export type formFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter, which form to fetch.
     */
    where: formWhereUniqueInput
  }

  /**
   * form findFirst
   */
  export type formFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter, which form to fetch.
     */
    where?: formWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formOrderByWithRelationInput | formOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forms.
     */
    cursor?: formWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * form findFirstOrThrow
   */
  export type formFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter, which form to fetch.
     */
    where?: formWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formOrderByWithRelationInput | formOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for forms.
     */
    cursor?: formWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * form findMany
   */
  export type formFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter, which forms to fetch.
     */
    where?: formWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of forms to fetch.
     */
    orderBy?: formOrderByWithRelationInput | formOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing forms.
     */
    cursor?: formWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * form create
   */
  export type formCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * The data needed to create a form.
     */
    data?: XOR<formCreateInput, formUncheckedCreateInput>
  }

  /**
   * form createMany
   */
  export type formCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many forms.
     */
    data: formCreateManyInput | formCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * form createManyAndReturn
   */
  export type formCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * The data used to create many forms.
     */
    data: formCreateManyInput | formCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * form update
   */
  export type formUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * The data needed to update a form.
     */
    data: XOR<formUpdateInput, formUncheckedUpdateInput>
    /**
     * Choose, which form to update.
     */
    where: formWhereUniqueInput
  }

  /**
   * form updateMany
   */
  export type formUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update forms.
     */
    data: XOR<formUpdateManyMutationInput, formUncheckedUpdateManyInput>
    /**
     * Filter which forms to update
     */
    where?: formWhereInput
    /**
     * Limit how many forms to update.
     */
    limit?: number
  }

  /**
   * form updateManyAndReturn
   */
  export type formUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * The data used to update forms.
     */
    data: XOR<formUpdateManyMutationInput, formUncheckedUpdateManyInput>
    /**
     * Filter which forms to update
     */
    where?: formWhereInput
    /**
     * Limit how many forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * form upsert
   */
  export type formUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * The filter to search for the form to update in case it exists.
     */
    where: formWhereUniqueInput
    /**
     * In case the form found by the `where` argument doesn't exist, create a new form with this data.
     */
    create: XOR<formCreateInput, formUncheckedCreateInput>
    /**
     * In case the form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formUpdateInput, formUncheckedUpdateInput>
  }

  /**
   * form delete
   */
  export type formDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    /**
     * Filter which form to delete.
     */
    where: formWhereUniqueInput
  }

  /**
   * form deleteMany
   */
  export type formDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which forms to delete
     */
    where?: formWhereInput
    /**
     * Limit how many forms to delete.
     */
    limit?: number
  }

  /**
   * form.answers
   */
  export type form$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * form.company
   */
  export type form$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * form.form_questions
   */
  export type form$form_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    where?: form_questionsWhereInput
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    cursor?: form_questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Form_questionsScalarFieldEnum | Form_questionsScalarFieldEnum[]
  }

  /**
   * form without action
   */
  export type formDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
  }


  /**
   * Model form_questions
   */

  export type AggregateForm_questions = {
    _count: Form_questionsCountAggregateOutputType | null
    _min: Form_questionsMinAggregateOutputType | null
    _max: Form_questionsMaxAggregateOutputType | null
  }

  export type Form_questionsMinAggregateOutputType = {
    id: string | null
    question_id: string | null
    form_id: string | null
    created_at: Date | null
  }

  export type Form_questionsMaxAggregateOutputType = {
    id: string | null
    question_id: string | null
    form_id: string | null
    created_at: Date | null
  }

  export type Form_questionsCountAggregateOutputType = {
    id: number
    question_id: number
    form_id: number
    created_at: number
    _all: number
  }


  export type Form_questionsMinAggregateInputType = {
    id?: true
    question_id?: true
    form_id?: true
    created_at?: true
  }

  export type Form_questionsMaxAggregateInputType = {
    id?: true
    question_id?: true
    form_id?: true
    created_at?: true
  }

  export type Form_questionsCountAggregateInputType = {
    id?: true
    question_id?: true
    form_id?: true
    created_at?: true
    _all?: true
  }

  export type Form_questionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which form_questions to aggregate.
     */
    where?: form_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_questions to fetch.
     */
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: form_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned form_questions
    **/
    _count?: true | Form_questionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Form_questionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Form_questionsMaxAggregateInputType
  }

  export type GetForm_questionsAggregateType<T extends Form_questionsAggregateArgs> = {
        [P in keyof T & keyof AggregateForm_questions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm_questions[P]>
      : GetScalarType<T[P], AggregateForm_questions[P]>
  }




  export type form_questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: form_questionsWhereInput
    orderBy?: form_questionsOrderByWithAggregationInput | form_questionsOrderByWithAggregationInput[]
    by: Form_questionsScalarFieldEnum[] | Form_questionsScalarFieldEnum
    having?: form_questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Form_questionsCountAggregateInputType | true
    _min?: Form_questionsMinAggregateInputType
    _max?: Form_questionsMaxAggregateInputType
  }

  export type Form_questionsGroupByOutputType = {
    id: string
    question_id: string | null
    form_id: string | null
    created_at: Date | null
    _count: Form_questionsCountAggregateOutputType | null
    _min: Form_questionsMinAggregateOutputType | null
    _max: Form_questionsMaxAggregateOutputType | null
  }

  type GetForm_questionsGroupByPayload<T extends form_questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Form_questionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Form_questionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Form_questionsGroupByOutputType[P]>
            : GetScalarType<T[P], Form_questionsGroupByOutputType[P]>
        }
      >
    >


  export type form_questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    form_id?: boolean
    created_at?: boolean
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }, ExtArgs["result"]["form_questions"]>

  export type form_questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    form_id?: boolean
    created_at?: boolean
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }, ExtArgs["result"]["form_questions"]>

  export type form_questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    form_id?: boolean
    created_at?: boolean
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }, ExtArgs["result"]["form_questions"]>

  export type form_questionsSelectScalar = {
    id?: boolean
    question_id?: boolean
    form_id?: boolean
    created_at?: boolean
  }

  export type form_questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "form_id" | "created_at", ExtArgs["result"]["form_questions"]>
  export type form_questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }
  export type form_questionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }
  export type form_questionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | form_questions$formArgs<ExtArgs>
    questions?: boolean | form_questions$questionsArgs<ExtArgs>
  }

  export type $form_questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "form_questions"
    objects: {
      form: Prisma.$formPayload<ExtArgs> | null
      questions: Prisma.$questionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question_id: string | null
      form_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["form_questions"]>
    composites: {}
  }

  type form_questionsGetPayload<S extends boolean | null | undefined | form_questionsDefaultArgs> = $Result.GetResult<Prisma.$form_questionsPayload, S>

  type form_questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<form_questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Form_questionsCountAggregateInputType | true
    }

  export interface form_questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['form_questions'], meta: { name: 'form_questions' } }
    /**
     * Find zero or one Form_questions that matches the filter.
     * @param {form_questionsFindUniqueArgs} args - Arguments to find a Form_questions
     * @example
     * // Get one Form_questions
     * const form_questions = await prisma.form_questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends form_questionsFindUniqueArgs>(args: SelectSubset<T, form_questionsFindUniqueArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form_questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {form_questionsFindUniqueOrThrowArgs} args - Arguments to find a Form_questions
     * @example
     * // Get one Form_questions
     * const form_questions = await prisma.form_questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends form_questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, form_questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsFindFirstArgs} args - Arguments to find a Form_questions
     * @example
     * // Get one Form_questions
     * const form_questions = await prisma.form_questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends form_questionsFindFirstArgs>(args?: SelectSubset<T, form_questionsFindFirstArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form_questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsFindFirstOrThrowArgs} args - Arguments to find a Form_questions
     * @example
     * // Get one Form_questions
     * const form_questions = await prisma.form_questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends form_questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, form_questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Form_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Form_questions
     * const form_questions = await prisma.form_questions.findMany()
     * 
     * // Get first 10 Form_questions
     * const form_questions = await prisma.form_questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const form_questionsWithIdOnly = await prisma.form_questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends form_questionsFindManyArgs>(args?: SelectSubset<T, form_questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form_questions.
     * @param {form_questionsCreateArgs} args - Arguments to create a Form_questions.
     * @example
     * // Create one Form_questions
     * const Form_questions = await prisma.form_questions.create({
     *   data: {
     *     // ... data to create a Form_questions
     *   }
     * })
     * 
     */
    create<T extends form_questionsCreateArgs>(args: SelectSubset<T, form_questionsCreateArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Form_questions.
     * @param {form_questionsCreateManyArgs} args - Arguments to create many Form_questions.
     * @example
     * // Create many Form_questions
     * const form_questions = await prisma.form_questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends form_questionsCreateManyArgs>(args?: SelectSubset<T, form_questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Form_questions and returns the data saved in the database.
     * @param {form_questionsCreateManyAndReturnArgs} args - Arguments to create many Form_questions.
     * @example
     * // Create many Form_questions
     * const form_questions = await prisma.form_questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Form_questions and only return the `id`
     * const form_questionsWithIdOnly = await prisma.form_questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends form_questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, form_questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form_questions.
     * @param {form_questionsDeleteArgs} args - Arguments to delete one Form_questions.
     * @example
     * // Delete one Form_questions
     * const Form_questions = await prisma.form_questions.delete({
     *   where: {
     *     // ... filter to delete one Form_questions
     *   }
     * })
     * 
     */
    delete<T extends form_questionsDeleteArgs>(args: SelectSubset<T, form_questionsDeleteArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form_questions.
     * @param {form_questionsUpdateArgs} args - Arguments to update one Form_questions.
     * @example
     * // Update one Form_questions
     * const form_questions = await prisma.form_questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends form_questionsUpdateArgs>(args: SelectSubset<T, form_questionsUpdateArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Form_questions.
     * @param {form_questionsDeleteManyArgs} args - Arguments to filter Form_questions to delete.
     * @example
     * // Delete a few Form_questions
     * const { count } = await prisma.form_questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends form_questionsDeleteManyArgs>(args?: SelectSubset<T, form_questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Form_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Form_questions
     * const form_questions = await prisma.form_questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends form_questionsUpdateManyArgs>(args: SelectSubset<T, form_questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Form_questions and returns the data updated in the database.
     * @param {form_questionsUpdateManyAndReturnArgs} args - Arguments to update many Form_questions.
     * @example
     * // Update many Form_questions
     * const form_questions = await prisma.form_questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Form_questions and only return the `id`
     * const form_questionsWithIdOnly = await prisma.form_questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends form_questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, form_questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form_questions.
     * @param {form_questionsUpsertArgs} args - Arguments to update or create a Form_questions.
     * @example
     * // Update or create a Form_questions
     * const form_questions = await prisma.form_questions.upsert({
     *   create: {
     *     // ... data to create a Form_questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form_questions we want to update
     *   }
     * })
     */
    upsert<T extends form_questionsUpsertArgs>(args: SelectSubset<T, form_questionsUpsertArgs<ExtArgs>>): Prisma__form_questionsClient<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Form_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsCountArgs} args - Arguments to filter Form_questions to count.
     * @example
     * // Count the number of Form_questions
     * const count = await prisma.form_questions.count({
     *   where: {
     *     // ... the filter for the Form_questions we want to count
     *   }
     * })
    **/
    count<T extends form_questionsCountArgs>(
      args?: Subset<T, form_questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Form_questionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Form_questionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Form_questionsAggregateArgs>(args: Subset<T, Form_questionsAggregateArgs>): Prisma.PrismaPromise<GetForm_questionsAggregateType<T>>

    /**
     * Group by Form_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {form_questionsGroupByArgs} args - Group by arguments.
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
      T extends form_questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: form_questionsGroupByArgs['orderBy'] }
        : { orderBy?: form_questionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, form_questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForm_questionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the form_questions model
   */
  readonly fields: form_questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for form_questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__form_questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends form_questions$formArgs<ExtArgs> = {}>(args?: Subset<T, form_questions$formArgs<ExtArgs>>): Prisma__formClient<$Result.GetResult<Prisma.$formPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends form_questions$questionsArgs<ExtArgs> = {}>(args?: Subset<T, form_questions$questionsArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the form_questions model
   */
  interface form_questionsFieldRefs {
    readonly id: FieldRef<"form_questions", 'String'>
    readonly question_id: FieldRef<"form_questions", 'String'>
    readonly form_id: FieldRef<"form_questions", 'String'>
    readonly created_at: FieldRef<"form_questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * form_questions findUnique
   */
  export type form_questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter, which form_questions to fetch.
     */
    where: form_questionsWhereUniqueInput
  }

  /**
   * form_questions findUniqueOrThrow
   */
  export type form_questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter, which form_questions to fetch.
     */
    where: form_questionsWhereUniqueInput
  }

  /**
   * form_questions findFirst
   */
  export type form_questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter, which form_questions to fetch.
     */
    where?: form_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_questions to fetch.
     */
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for form_questions.
     */
    cursor?: form_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of form_questions.
     */
    distinct?: Form_questionsScalarFieldEnum | Form_questionsScalarFieldEnum[]
  }

  /**
   * form_questions findFirstOrThrow
   */
  export type form_questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter, which form_questions to fetch.
     */
    where?: form_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_questions to fetch.
     */
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for form_questions.
     */
    cursor?: form_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of form_questions.
     */
    distinct?: Form_questionsScalarFieldEnum | Form_questionsScalarFieldEnum[]
  }

  /**
   * form_questions findMany
   */
  export type form_questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter, which form_questions to fetch.
     */
    where?: form_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of form_questions to fetch.
     */
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing form_questions.
     */
    cursor?: form_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` form_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` form_questions.
     */
    skip?: number
    distinct?: Form_questionsScalarFieldEnum | Form_questionsScalarFieldEnum[]
  }

  /**
   * form_questions create
   */
  export type form_questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a form_questions.
     */
    data?: XOR<form_questionsCreateInput, form_questionsUncheckedCreateInput>
  }

  /**
   * form_questions createMany
   */
  export type form_questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many form_questions.
     */
    data: form_questionsCreateManyInput | form_questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * form_questions createManyAndReturn
   */
  export type form_questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * The data used to create many form_questions.
     */
    data: form_questionsCreateManyInput | form_questionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * form_questions update
   */
  export type form_questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a form_questions.
     */
    data: XOR<form_questionsUpdateInput, form_questionsUncheckedUpdateInput>
    /**
     * Choose, which form_questions to update.
     */
    where: form_questionsWhereUniqueInput
  }

  /**
   * form_questions updateMany
   */
  export type form_questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update form_questions.
     */
    data: XOR<form_questionsUpdateManyMutationInput, form_questionsUncheckedUpdateManyInput>
    /**
     * Filter which form_questions to update
     */
    where?: form_questionsWhereInput
    /**
     * Limit how many form_questions to update.
     */
    limit?: number
  }

  /**
   * form_questions updateManyAndReturn
   */
  export type form_questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * The data used to update form_questions.
     */
    data: XOR<form_questionsUpdateManyMutationInput, form_questionsUncheckedUpdateManyInput>
    /**
     * Filter which form_questions to update
     */
    where?: form_questionsWhereInput
    /**
     * Limit how many form_questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * form_questions upsert
   */
  export type form_questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the form_questions to update in case it exists.
     */
    where: form_questionsWhereUniqueInput
    /**
     * In case the form_questions found by the `where` argument doesn't exist, create a new form_questions with this data.
     */
    create: XOR<form_questionsCreateInput, form_questionsUncheckedCreateInput>
    /**
     * In case the form_questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<form_questionsUpdateInput, form_questionsUncheckedUpdateInput>
  }

  /**
   * form_questions delete
   */
  export type form_questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    /**
     * Filter which form_questions to delete.
     */
    where: form_questionsWhereUniqueInput
  }

  /**
   * form_questions deleteMany
   */
  export type form_questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which form_questions to delete
     */
    where?: form_questionsWhereInput
    /**
     * Limit how many form_questions to delete.
     */
    limit?: number
  }

  /**
   * form_questions.form
   */
  export type form_questions$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form
     */
    select?: formSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form
     */
    omit?: formOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formInclude<ExtArgs> | null
    where?: formWhereInput
  }

  /**
   * form_questions.questions
   */
  export type form_questions$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
  }

  /**
   * form_questions without action
   */
  export type form_questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    question_text: string | null
    type: string | null
    created_at: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    question_text: string | null
    type: string | null
    created_at: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    question_text: number
    type: number
    created_at: number
    _all: number
  }


  export type QuestionsMinAggregateInputType = {
    id?: true
    question_text?: true
    type?: true
    created_at?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    question_text?: true
    type?: true
    created_at?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    question_text?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    question_text: string | null
    type: string | null
    created_at: Date | null
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    type?: boolean
    created_at?: boolean
    form_questions?: boolean | questions$form_questionsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectScalar = {
    id?: boolean
    question_text?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_text" | "type" | "created_at", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_questions?: boolean | questions$form_questionsArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type questionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      form_questions: Prisma.$form_questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question_text: string | null
      type: string | null
      created_at: Date | null
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {questionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {questionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form_questions<T extends questions$form_questionsArgs<ExtArgs> = {}>(args?: Subset<T, questions$form_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$form_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'String'>
    readonly question_text: FieldRef<"questions", 'String'>
    readonly type: FieldRef<"questions", 'String'>
    readonly created_at: FieldRef<"questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data?: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions createManyAndReturn
   */
  export type questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions updateManyAndReturn
   */
  export type questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.form_questions
   */
  export type questions$form_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the form_questions
     */
    select?: form_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the form_questions
     */
    omit?: form_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: form_questionsInclude<ExtArgs> | null
    where?: form_questionsWhereInput
    orderBy?: form_questionsOrderByWithRelationInput | form_questionsOrderByWithRelationInput[]
    cursor?: form_questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Form_questionsScalarFieldEnum | Form_questionsScalarFieldEnum[]
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    work_regime: number | null
  }

  export type UsersSumAggregateOutputType = {
    work_regime: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    companyId: string | null
    work_regime: number | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    companyId: string | null
    work_regime: number | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpf: number
    companyId: number
    work_regime: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    work_regime?: true
  }

  export type UsersSumAggregateInputType = {
    work_regime?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    companyId?: true
    work_regime?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    companyId?: true
    work_regime?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpf?: true
    companyId?: true
    work_regime?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    cpf: string | null
    companyId: string | null
    work_regime: number | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    companyId?: boolean
    work_regime?: boolean
    created_at?: boolean
    answers?: boolean | users$answersArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    companyId?: boolean
    work_regime?: boolean
    created_at?: boolean
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    companyId?: boolean
    work_regime?: boolean
    created_at?: boolean
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    companyId?: boolean
    work_regime?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "cpf" | "companyId" | "work_regime" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | users$answersArgs<ExtArgs>
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | users$companyArgs<ExtArgs>
    work_regime_users_work_regimeTowork_regime?: boolean | users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs> | null
      work_regime_users_work_regimeTowork_regime: Prisma.$work_regimePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      cpf: string | null
      companyId: string | null
      work_regime: number | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends users$answersArgs<ExtArgs> = {}>(args?: Subset<T, users$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends users$companyArgs<ExtArgs> = {}>(args?: Subset<T, users$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    work_regime_users_work_regimeTowork_regime<T extends users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs> = {}>(args?: Subset<T, users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly cpf: FieldRef<"users", 'String'>
    readonly companyId: FieldRef<"users", 'String'>
    readonly work_regime: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.answers
   */
  export type users$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * users.company
   */
  export type users$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * users.work_regime_users_work_regimeTowork_regime
   */
  export type users$work_regime_users_work_regimeTowork_regimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    where?: work_regimeWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model work_regime
   */

  export type AggregateWork_regime = {
    _count: Work_regimeCountAggregateOutputType | null
    _avg: Work_regimeAvgAggregateOutputType | null
    _sum: Work_regimeSumAggregateOutputType | null
    _min: Work_regimeMinAggregateOutputType | null
    _max: Work_regimeMaxAggregateOutputType | null
  }

  export type Work_regimeAvgAggregateOutputType = {
    id: number | null
  }

  export type Work_regimeSumAggregateOutputType = {
    id: number | null
  }

  export type Work_regimeMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type Work_regimeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type Work_regimeCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type Work_regimeAvgAggregateInputType = {
    id?: true
  }

  export type Work_regimeSumAggregateInputType = {
    id?: true
  }

  export type Work_regimeMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type Work_regimeMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type Work_regimeCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type Work_regimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_regime to aggregate.
     */
    where?: work_regimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_regimes to fetch.
     */
    orderBy?: work_regimeOrderByWithRelationInput | work_regimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_regimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_regimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_regimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_regimes
    **/
    _count?: true | Work_regimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Work_regimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Work_regimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_regimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_regimeMaxAggregateInputType
  }

  export type GetWork_regimeAggregateType<T extends Work_regimeAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_regime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_regime[P]>
      : GetScalarType<T[P], AggregateWork_regime[P]>
  }




  export type work_regimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_regimeWhereInput
    orderBy?: work_regimeOrderByWithAggregationInput | work_regimeOrderByWithAggregationInput[]
    by: Work_regimeScalarFieldEnum[] | Work_regimeScalarFieldEnum
    having?: work_regimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_regimeCountAggregateInputType | true
    _avg?: Work_regimeAvgAggregateInputType
    _sum?: Work_regimeSumAggregateInputType
    _min?: Work_regimeMinAggregateInputType
    _max?: Work_regimeMaxAggregateInputType
  }

  export type Work_regimeGroupByOutputType = {
    id: number
    name: string | null
    created_at: Date | null
    _count: Work_regimeCountAggregateOutputType | null
    _avg: Work_regimeAvgAggregateOutputType | null
    _sum: Work_regimeSumAggregateOutputType | null
    _min: Work_regimeMinAggregateOutputType | null
    _max: Work_regimeMaxAggregateOutputType | null
  }

  type GetWork_regimeGroupByPayload<T extends work_regimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_regimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_regimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_regimeGroupByOutputType[P]>
            : GetScalarType<T[P], Work_regimeGroupByOutputType[P]>
        }
      >
    >


  export type work_regimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    users_users_work_regimeTowork_regime?: boolean | work_regime$users_users_work_regimeTowork_regimeArgs<ExtArgs>
    _count?: boolean | Work_regimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work_regime"]>

  export type work_regimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["work_regime"]>

  export type work_regimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["work_regime"]>

  export type work_regimeSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type work_regimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["work_regime"]>
  export type work_regimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_users_work_regimeTowork_regime?: boolean | work_regime$users_users_work_regimeTowork_regimeArgs<ExtArgs>
    _count?: boolean | Work_regimeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type work_regimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type work_regimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $work_regimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_regime"
    objects: {
      users_users_work_regimeTowork_regime: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      created_at: Date | null
    }, ExtArgs["result"]["work_regime"]>
    composites: {}
  }

  type work_regimeGetPayload<S extends boolean | null | undefined | work_regimeDefaultArgs> = $Result.GetResult<Prisma.$work_regimePayload, S>

  type work_regimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_regimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_regimeCountAggregateInputType | true
    }

  export interface work_regimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_regime'], meta: { name: 'work_regime' } }
    /**
     * Find zero or one Work_regime that matches the filter.
     * @param {work_regimeFindUniqueArgs} args - Arguments to find a Work_regime
     * @example
     * // Get one Work_regime
     * const work_regime = await prisma.work_regime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_regimeFindUniqueArgs>(args: SelectSubset<T, work_regimeFindUniqueArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_regime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_regimeFindUniqueOrThrowArgs} args - Arguments to find a Work_regime
     * @example
     * // Get one Work_regime
     * const work_regime = await prisma.work_regime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_regimeFindUniqueOrThrowArgs>(args: SelectSubset<T, work_regimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_regime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeFindFirstArgs} args - Arguments to find a Work_regime
     * @example
     * // Get one Work_regime
     * const work_regime = await prisma.work_regime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_regimeFindFirstArgs>(args?: SelectSubset<T, work_regimeFindFirstArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_regime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeFindFirstOrThrowArgs} args - Arguments to find a Work_regime
     * @example
     * // Get one Work_regime
     * const work_regime = await prisma.work_regime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_regimeFindFirstOrThrowArgs>(args?: SelectSubset<T, work_regimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_regimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_regimes
     * const work_regimes = await prisma.work_regime.findMany()
     * 
     * // Get first 10 Work_regimes
     * const work_regimes = await prisma.work_regime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_regimeWithIdOnly = await prisma.work_regime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_regimeFindManyArgs>(args?: SelectSubset<T, work_regimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_regime.
     * @param {work_regimeCreateArgs} args - Arguments to create a Work_regime.
     * @example
     * // Create one Work_regime
     * const Work_regime = await prisma.work_regime.create({
     *   data: {
     *     // ... data to create a Work_regime
     *   }
     * })
     * 
     */
    create<T extends work_regimeCreateArgs>(args: SelectSubset<T, work_regimeCreateArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_regimes.
     * @param {work_regimeCreateManyArgs} args - Arguments to create many Work_regimes.
     * @example
     * // Create many Work_regimes
     * const work_regime = await prisma.work_regime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_regimeCreateManyArgs>(args?: SelectSubset<T, work_regimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_regimes and returns the data saved in the database.
     * @param {work_regimeCreateManyAndReturnArgs} args - Arguments to create many Work_regimes.
     * @example
     * // Create many Work_regimes
     * const work_regime = await prisma.work_regime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_regimes and only return the `id`
     * const work_regimeWithIdOnly = await prisma.work_regime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_regimeCreateManyAndReturnArgs>(args?: SelectSubset<T, work_regimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_regime.
     * @param {work_regimeDeleteArgs} args - Arguments to delete one Work_regime.
     * @example
     * // Delete one Work_regime
     * const Work_regime = await prisma.work_regime.delete({
     *   where: {
     *     // ... filter to delete one Work_regime
     *   }
     * })
     * 
     */
    delete<T extends work_regimeDeleteArgs>(args: SelectSubset<T, work_regimeDeleteArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_regime.
     * @param {work_regimeUpdateArgs} args - Arguments to update one Work_regime.
     * @example
     * // Update one Work_regime
     * const work_regime = await prisma.work_regime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_regimeUpdateArgs>(args: SelectSubset<T, work_regimeUpdateArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_regimes.
     * @param {work_regimeDeleteManyArgs} args - Arguments to filter Work_regimes to delete.
     * @example
     * // Delete a few Work_regimes
     * const { count } = await prisma.work_regime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_regimeDeleteManyArgs>(args?: SelectSubset<T, work_regimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_regimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_regimes
     * const work_regime = await prisma.work_regime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_regimeUpdateManyArgs>(args: SelectSubset<T, work_regimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_regimes and returns the data updated in the database.
     * @param {work_regimeUpdateManyAndReturnArgs} args - Arguments to update many Work_regimes.
     * @example
     * // Update many Work_regimes
     * const work_regime = await prisma.work_regime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_regimes and only return the `id`
     * const work_regimeWithIdOnly = await prisma.work_regime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends work_regimeUpdateManyAndReturnArgs>(args: SelectSubset<T, work_regimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_regime.
     * @param {work_regimeUpsertArgs} args - Arguments to update or create a Work_regime.
     * @example
     * // Update or create a Work_regime
     * const work_regime = await prisma.work_regime.upsert({
     *   create: {
     *     // ... data to create a Work_regime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_regime we want to update
     *   }
     * })
     */
    upsert<T extends work_regimeUpsertArgs>(args: SelectSubset<T, work_regimeUpsertArgs<ExtArgs>>): Prisma__work_regimeClient<$Result.GetResult<Prisma.$work_regimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_regimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeCountArgs} args - Arguments to filter Work_regimes to count.
     * @example
     * // Count the number of Work_regimes
     * const count = await prisma.work_regime.count({
     *   where: {
     *     // ... the filter for the Work_regimes we want to count
     *   }
     * })
    **/
    count<T extends work_regimeCountArgs>(
      args?: Subset<T, work_regimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_regimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_regime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_regimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Work_regimeAggregateArgs>(args: Subset<T, Work_regimeAggregateArgs>): Prisma.PrismaPromise<GetWork_regimeAggregateType<T>>

    /**
     * Group by Work_regime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_regimeGroupByArgs} args - Group by arguments.
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
      T extends work_regimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_regimeGroupByArgs['orderBy'] }
        : { orderBy?: work_regimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, work_regimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_regimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_regime model
   */
  readonly fields: work_regimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_regime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_regimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_users_work_regimeTowork_regime<T extends work_regime$users_users_work_regimeTowork_regimeArgs<ExtArgs> = {}>(args?: Subset<T, work_regime$users_users_work_regimeTowork_regimeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the work_regime model
   */
  interface work_regimeFieldRefs {
    readonly id: FieldRef<"work_regime", 'Int'>
    readonly name: FieldRef<"work_regime", 'String'>
    readonly created_at: FieldRef<"work_regime", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * work_regime findUnique
   */
  export type work_regimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter, which work_regime to fetch.
     */
    where: work_regimeWhereUniqueInput
  }

  /**
   * work_regime findUniqueOrThrow
   */
  export type work_regimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter, which work_regime to fetch.
     */
    where: work_regimeWhereUniqueInput
  }

  /**
   * work_regime findFirst
   */
  export type work_regimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter, which work_regime to fetch.
     */
    where?: work_regimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_regimes to fetch.
     */
    orderBy?: work_regimeOrderByWithRelationInput | work_regimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_regimes.
     */
    cursor?: work_regimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_regimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_regimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_regimes.
     */
    distinct?: Work_regimeScalarFieldEnum | Work_regimeScalarFieldEnum[]
  }

  /**
   * work_regime findFirstOrThrow
   */
  export type work_regimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter, which work_regime to fetch.
     */
    where?: work_regimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_regimes to fetch.
     */
    orderBy?: work_regimeOrderByWithRelationInput | work_regimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_regimes.
     */
    cursor?: work_regimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_regimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_regimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_regimes.
     */
    distinct?: Work_regimeScalarFieldEnum | Work_regimeScalarFieldEnum[]
  }

  /**
   * work_regime findMany
   */
  export type work_regimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter, which work_regimes to fetch.
     */
    where?: work_regimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_regimes to fetch.
     */
    orderBy?: work_regimeOrderByWithRelationInput | work_regimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_regimes.
     */
    cursor?: work_regimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_regimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_regimes.
     */
    skip?: number
    distinct?: Work_regimeScalarFieldEnum | Work_regimeScalarFieldEnum[]
  }

  /**
   * work_regime create
   */
  export type work_regimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * The data needed to create a work_regime.
     */
    data?: XOR<work_regimeCreateInput, work_regimeUncheckedCreateInput>
  }

  /**
   * work_regime createMany
   */
  export type work_regimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_regimes.
     */
    data: work_regimeCreateManyInput | work_regimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_regime createManyAndReturn
   */
  export type work_regimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * The data used to create many work_regimes.
     */
    data: work_regimeCreateManyInput | work_regimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_regime update
   */
  export type work_regimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * The data needed to update a work_regime.
     */
    data: XOR<work_regimeUpdateInput, work_regimeUncheckedUpdateInput>
    /**
     * Choose, which work_regime to update.
     */
    where: work_regimeWhereUniqueInput
  }

  /**
   * work_regime updateMany
   */
  export type work_regimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_regimes.
     */
    data: XOR<work_regimeUpdateManyMutationInput, work_regimeUncheckedUpdateManyInput>
    /**
     * Filter which work_regimes to update
     */
    where?: work_regimeWhereInput
    /**
     * Limit how many work_regimes to update.
     */
    limit?: number
  }

  /**
   * work_regime updateManyAndReturn
   */
  export type work_regimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * The data used to update work_regimes.
     */
    data: XOR<work_regimeUpdateManyMutationInput, work_regimeUncheckedUpdateManyInput>
    /**
     * Filter which work_regimes to update
     */
    where?: work_regimeWhereInput
    /**
     * Limit how many work_regimes to update.
     */
    limit?: number
  }

  /**
   * work_regime upsert
   */
  export type work_regimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * The filter to search for the work_regime to update in case it exists.
     */
    where: work_regimeWhereUniqueInput
    /**
     * In case the work_regime found by the `where` argument doesn't exist, create a new work_regime with this data.
     */
    create: XOR<work_regimeCreateInput, work_regimeUncheckedCreateInput>
    /**
     * In case the work_regime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_regimeUpdateInput, work_regimeUncheckedUpdateInput>
  }

  /**
   * work_regime delete
   */
  export type work_regimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
    /**
     * Filter which work_regime to delete.
     */
    where: work_regimeWhereUniqueInput
  }

  /**
   * work_regime deleteMany
   */
  export type work_regimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_regimes to delete
     */
    where?: work_regimeWhereInput
    /**
     * Limit how many work_regimes to delete.
     */
    limit?: number
  }

  /**
   * work_regime.users_users_work_regimeTowork_regime
   */
  export type work_regime$users_users_work_regimeTowork_regimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * work_regime without action
   */
  export type work_regimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_regime
     */
    select?: work_regimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_regime
     */
    omit?: work_regimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_regimeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnswersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    form_id: 'form_id',
    send_date: 'send_date',
    created_at: 'created_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    category: 'category',
    forms: 'forms',
    created_at: 'created_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company_id: 'company_id',
    created_at: 'created_at'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const Form_questionsScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    form_id: 'form_id',
    created_at: 'created_at'
  };

  export type Form_questionsScalarFieldEnum = (typeof Form_questionsScalarFieldEnum)[keyof typeof Form_questionsScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    question_text: 'question_text',
    type: 'type',
    created_at: 'created_at'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cpf: 'cpf',
    companyId: 'companyId',
    work_regime: 'work_regime',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Work_regimeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type Work_regimeScalarFieldEnum = (typeof Work_regimeScalarFieldEnum)[keyof typeof Work_regimeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type answersWhereInput = {
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    id?: UuidFilter<"answers"> | string
    user_id?: UuidNullableFilter<"answers"> | string | null
    form_id?: UuidNullableFilter<"answers"> | string | null
    send_date?: DateTimeNullableFilter<"answers"> | Date | string | null
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    form?: XOR<FormNullableScalarRelationFilter, formWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type answersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    form_id?: SortOrderInput | SortOrder
    send_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    form?: formOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type answersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    user_id?: UuidNullableFilter<"answers"> | string | null
    form_id?: UuidNullableFilter<"answers"> | string | null
    send_date?: DateTimeNullableFilter<"answers"> | Date | string | null
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    form?: XOR<FormNullableScalarRelationFilter, formWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type answersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    form_id?: SortOrderInput | SortOrder
    send_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: answersCountOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    OR?: answersScalarWhereWithAggregatesInput[]
    NOT?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"answers"> | string
    user_id?: UuidNullableWithAggregatesFilter<"answers"> | string | null
    form_id?: UuidNullableWithAggregatesFilter<"answers"> | string | null
    send_date?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: UuidFilter<"company"> | string
    name?: StringNullableFilter<"company"> | string | null
    cnpj?: StringNullableFilter<"company"> | string | null
    category?: StringNullableFilter<"company"> | string | null
    forms?: StringNullableFilter<"company"> | string | null
    created_at?: DateTimeNullableFilter<"company"> | Date | string | null
    form?: FormListRelationFilter
    users?: UsersListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    forms?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    form?: formOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringNullableFilter<"company"> | string | null
    cnpj?: StringNullableFilter<"company"> | string | null
    category?: StringNullableFilter<"company"> | string | null
    forms?: StringNullableFilter<"company"> | string | null
    created_at?: DateTimeNullableFilter<"company"> | Date | string | null
    form?: FormListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    forms?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"company"> | string
    name?: StringNullableWithAggregatesFilter<"company"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"company"> | string | null
    category?: StringNullableWithAggregatesFilter<"company"> | string | null
    forms?: StringNullableWithAggregatesFilter<"company"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
  }

  export type formWhereInput = {
    AND?: formWhereInput | formWhereInput[]
    OR?: formWhereInput[]
    NOT?: formWhereInput | formWhereInput[]
    id?: UuidFilter<"form"> | string
    title?: StringNullableFilter<"form"> | string | null
    company_id?: UuidNullableFilter<"form"> | string | null
    created_at?: DateTimeNullableFilter<"form"> | Date | string | null
    answers?: AnswersListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    form_questions?: Form_questionsListRelationFilter
  }

  export type formOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
    form_questions?: form_questionsOrderByRelationAggregateInput
  }

  export type formWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: formWhereInput | formWhereInput[]
    OR?: formWhereInput[]
    NOT?: formWhereInput | formWhereInput[]
    title?: StringNullableFilter<"form"> | string | null
    company_id?: UuidNullableFilter<"form"> | string | null
    created_at?: DateTimeNullableFilter<"form"> | Date | string | null
    answers?: AnswersListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    form_questions?: Form_questionsListRelationFilter
  }, "id">

  export type formOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: formCountOrderByAggregateInput
    _max?: formMaxOrderByAggregateInput
    _min?: formMinOrderByAggregateInput
  }

  export type formScalarWhereWithAggregatesInput = {
    AND?: formScalarWhereWithAggregatesInput | formScalarWhereWithAggregatesInput[]
    OR?: formScalarWhereWithAggregatesInput[]
    NOT?: formScalarWhereWithAggregatesInput | formScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"form"> | string
    title?: StringNullableWithAggregatesFilter<"form"> | string | null
    company_id?: UuidNullableWithAggregatesFilter<"form"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"form"> | Date | string | null
  }

  export type form_questionsWhereInput = {
    AND?: form_questionsWhereInput | form_questionsWhereInput[]
    OR?: form_questionsWhereInput[]
    NOT?: form_questionsWhereInput | form_questionsWhereInput[]
    id?: UuidFilter<"form_questions"> | string
    question_id?: UuidNullableFilter<"form_questions"> | string | null
    form_id?: UuidNullableFilter<"form_questions"> | string | null
    created_at?: DateTimeNullableFilter<"form_questions"> | Date | string | null
    form?: XOR<FormNullableScalarRelationFilter, formWhereInput> | null
    questions?: XOR<QuestionsNullableScalarRelationFilter, questionsWhereInput> | null
  }

  export type form_questionsOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    form_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    form?: formOrderByWithRelationInput
    questions?: questionsOrderByWithRelationInput
  }

  export type form_questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: form_questionsWhereInput | form_questionsWhereInput[]
    OR?: form_questionsWhereInput[]
    NOT?: form_questionsWhereInput | form_questionsWhereInput[]
    question_id?: UuidNullableFilter<"form_questions"> | string | null
    form_id?: UuidNullableFilter<"form_questions"> | string | null
    created_at?: DateTimeNullableFilter<"form_questions"> | Date | string | null
    form?: XOR<FormNullableScalarRelationFilter, formWhereInput> | null
    questions?: XOR<QuestionsNullableScalarRelationFilter, questionsWhereInput> | null
  }, "id">

  export type form_questionsOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrderInput | SortOrder
    form_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: form_questionsCountOrderByAggregateInput
    _max?: form_questionsMaxOrderByAggregateInput
    _min?: form_questionsMinOrderByAggregateInput
  }

  export type form_questionsScalarWhereWithAggregatesInput = {
    AND?: form_questionsScalarWhereWithAggregatesInput | form_questionsScalarWhereWithAggregatesInput[]
    OR?: form_questionsScalarWhereWithAggregatesInput[]
    NOT?: form_questionsScalarWhereWithAggregatesInput | form_questionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"form_questions"> | string
    question_id?: UuidNullableWithAggregatesFilter<"form_questions"> | string | null
    form_id?: UuidNullableWithAggregatesFilter<"form_questions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"form_questions"> | Date | string | null
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: UuidFilter<"questions"> | string
    question_text?: StringNullableFilter<"questions"> | string | null
    type?: StringNullableFilter<"questions"> | string | null
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    form_questions?: Form_questionsListRelationFilter
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    question_text?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    form_questions?: form_questionsOrderByRelationAggregateInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    question_text?: StringNullableFilter<"questions"> | string | null
    type?: StringNullableFilter<"questions"> | string | null
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    form_questions?: Form_questionsListRelationFilter
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    question_text?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: questionsCountOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"questions"> | string
    question_text?: StringNullableWithAggregatesFilter<"questions"> | string | null
    type?: StringNullableWithAggregatesFilter<"questions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    cpf?: StringNullableFilter<"users"> | string | null
    companyId?: UuidNullableFilter<"users"> | string | null
    work_regime?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    answers?: AnswersListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    work_regime_users_work_regimeTowork_regime?: XOR<Work_regimeNullableScalarRelationFilter, work_regimeWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    work_regime?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
    work_regime_users_work_regimeTowork_regime?: work_regimeOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    cpf?: StringNullableFilter<"users"> | string | null
    companyId?: UuidNullableFilter<"users"> | string | null
    work_regime?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    answers?: AnswersListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    work_regime_users_work_regimeTowork_regime?: XOR<Work_regimeNullableScalarRelationFilter, work_regimeWhereInput> | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    work_regime?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"users"> | string | null
    companyId?: UuidNullableWithAggregatesFilter<"users"> | string | null
    work_regime?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type work_regimeWhereInput = {
    AND?: work_regimeWhereInput | work_regimeWhereInput[]
    OR?: work_regimeWhereInput[]
    NOT?: work_regimeWhereInput | work_regimeWhereInput[]
    id?: IntFilter<"work_regime"> | number
    name?: StringNullableFilter<"work_regime"> | string | null
    created_at?: DateTimeNullableFilter<"work_regime"> | Date | string | null
    users_users_work_regimeTowork_regime?: UsersListRelationFilter
  }

  export type work_regimeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users_users_work_regimeTowork_regime?: usersOrderByRelationAggregateInput
  }

  export type work_regimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: work_regimeWhereInput | work_regimeWhereInput[]
    OR?: work_regimeWhereInput[]
    NOT?: work_regimeWhereInput | work_regimeWhereInput[]
    name?: StringNullableFilter<"work_regime"> | string | null
    created_at?: DateTimeNullableFilter<"work_regime"> | Date | string | null
    users_users_work_regimeTowork_regime?: UsersListRelationFilter
  }, "id">

  export type work_regimeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: work_regimeCountOrderByAggregateInput
    _avg?: work_regimeAvgOrderByAggregateInput
    _max?: work_regimeMaxOrderByAggregateInput
    _min?: work_regimeMinOrderByAggregateInput
    _sum?: work_regimeSumOrderByAggregateInput
  }

  export type work_regimeScalarWhereWithAggregatesInput = {
    AND?: work_regimeScalarWhereWithAggregatesInput | work_regimeScalarWhereWithAggregatesInput[]
    OR?: work_regimeScalarWhereWithAggregatesInput[]
    NOT?: work_regimeScalarWhereWithAggregatesInput | work_regimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"work_regime"> | number
    name?: StringNullableWithAggregatesFilter<"work_regime"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"work_regime"> | Date | string | null
  }

  export type answersCreateInput = {
    id?: string
    send_date?: Date | string | null
    created_at?: Date | string | null
    form?: formCreateNestedOneWithoutAnswersInput
    users?: usersCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    form_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type answersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateOneWithoutAnswersNestedInput
    users?: usersUpdateOneWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyInput = {
    id?: string
    user_id?: string | null
    form_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type answersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyCreateInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    form?: formCreateNestedManyWithoutCompanyInput
    users?: usersCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    form?: formUncheckedCreateNestedManyWithoutCompanyInput
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateManyWithoutCompanyNestedInput
    users?: usersUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUncheckedUpdateManyWithoutCompanyNestedInput
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type formCreateInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutFormInput
    company?: companyCreateNestedOneWithoutFormInput
    form_questions?: form_questionsCreateNestedManyWithoutFormInput
  }

  export type formUncheckedCreateInput = {
    id?: string
    title?: string | null
    company_id?: string | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutFormInput
    form_questions?: form_questionsUncheckedCreateNestedManyWithoutFormInput
  }

  export type formUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutFormNestedInput
    company?: companyUpdateOneWithoutFormNestedInput
    form_questions?: form_questionsUpdateManyWithoutFormNestedInput
  }

  export type formUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutFormNestedInput
    form_questions?: form_questionsUncheckedUpdateManyWithoutFormNestedInput
  }

  export type formCreateManyInput = {
    id?: string
    title?: string | null
    company_id?: string | null
    created_at?: Date | string | null
  }

  export type formUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type formUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsCreateInput = {
    id?: string
    created_at?: Date | string | null
    form?: formCreateNestedOneWithoutForm_questionsInput
    questions?: questionsCreateNestedOneWithoutForm_questionsInput
  }

  export type form_questionsUncheckedCreateInput = {
    id?: string
    question_id?: string | null
    form_id?: string | null
    created_at?: Date | string | null
  }

  export type form_questionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateOneWithoutForm_questionsNestedInput
    questions?: questionsUpdateOneWithoutForm_questionsNestedInput
  }

  export type form_questionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: NullableStringFieldUpdateOperationsInput | string | null
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsCreateManyInput = {
    id?: string
    question_id?: string | null
    form_id?: string | null
    created_at?: Date | string | null
  }

  export type form_questionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: NullableStringFieldUpdateOperationsInput | string | null
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsCreateInput = {
    id?: string
    question_text?: string | null
    type?: string | null
    created_at?: Date | string | null
    form_questions?: form_questionsCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: string
    question_text?: string | null
    type?: string | null
    created_at?: Date | string | null
    form_questions?: form_questionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_questions?: form_questionsUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_questions?: form_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateManyInput = {
    id?: string
    question_text?: string | null
    type?: string | null
    created_at?: Date | string | null
  }

  export type questionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    company?: companyCreateNestedOneWithoutUsersInput
    work_regime_users_work_regimeTowork_regime?: work_regimeCreateNestedOneWithoutUsers_users_work_regimeTowork_regimeInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    companyId?: string | null
    work_regime?: number | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    company?: companyUpdateOneWithoutUsersNestedInput
    work_regime_users_work_regimeTowork_regime?: work_regimeUpdateOneWithoutUsers_users_work_regimeTowork_regimeNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    work_regime?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    companyId?: string | null
    work_regime?: number | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    work_regime?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type work_regimeCreateInput = {
    name?: string | null
    created_at?: Date | string | null
    users_users_work_regimeTowork_regime?: usersCreateNestedManyWithoutWork_regime_users_work_regimeTowork_regimeInput
  }

  export type work_regimeUncheckedCreateInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    users_users_work_regimeTowork_regime?: usersUncheckedCreateNestedManyWithoutWork_regime_users_work_regimeTowork_regimeInput
  }

  export type work_regimeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_users_work_regimeTowork_regime?: usersUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeNestedInput
  }

  export type work_regimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_users_work_regimeTowork_regime?: usersUncheckedUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeNestedInput
  }

  export type work_regimeCreateManyInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
  }

  export type work_regimeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type work_regimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FormNullableScalarRelationFilter = {
    is?: formWhereInput | null
    isNot?: formWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type answersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    form_id?: SortOrder
    send_date?: SortOrder
    created_at?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    form_id?: SortOrder
    send_date?: SortOrder
    created_at?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    form_id?: SortOrder
    send_date?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FormListRelationFilter = {
    every?: formWhereInput
    some?: formWhereInput
    none?: formWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type formOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    category?: SortOrder
    forms?: SortOrder
    created_at?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    category?: SortOrder
    forms?: SortOrder
    created_at?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    category?: SortOrder
    forms?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: companyWhereInput | null
    isNot?: companyWhereInput | null
  }

  export type Form_questionsListRelationFilter = {
    every?: form_questionsWhereInput
    some?: form_questionsWhereInput
    none?: form_questionsWhereInput
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type form_questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type formMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type formMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type QuestionsNullableScalarRelationFilter = {
    is?: questionsWhereInput | null
    isNot?: questionsWhereInput | null
  }

  export type form_questionsCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    form_id?: SortOrder
    created_at?: SortOrder
  }

  export type form_questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    form_id?: SortOrder
    created_at?: SortOrder
  }

  export type form_questionsMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    form_id?: SortOrder
    created_at?: SortOrder
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Work_regimeNullableScalarRelationFilter = {
    is?: work_regimeWhereInput | null
    isNot?: work_regimeWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    companyId?: SortOrder
    work_regime?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    work_regime?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    companyId?: SortOrder
    work_regime?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    companyId?: SortOrder
    work_regime?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    work_regime?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type work_regimeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type work_regimeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type work_regimeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type work_regimeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type work_regimeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type formCreateNestedOneWithoutAnswersInput = {
    create?: XOR<formCreateWithoutAnswersInput, formUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: formCreateOrConnectWithoutAnswersInput
    connect?: formWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAnswersInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type formUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<formCreateWithoutAnswersInput, formUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: formCreateOrConnectWithoutAnswersInput
    upsert?: formUpsertWithoutAnswersInput
    disconnect?: formWhereInput | boolean
    delete?: formWhereInput | boolean
    connect?: formWhereUniqueInput
    update?: XOR<XOR<formUpdateToOneWithWhereWithoutAnswersInput, formUpdateWithoutAnswersInput>, formUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateOneWithoutAnswersNestedInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    upsert?: usersUpsertWithoutAnswersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAnswersInput, usersUpdateWithoutAnswersInput>, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type formCreateNestedManyWithoutCompanyInput = {
    create?: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput> | formCreateWithoutCompanyInput[] | formUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formCreateOrConnectWithoutCompanyInput | formCreateOrConnectWithoutCompanyInput[]
    createMany?: formCreateManyCompanyInputEnvelope
    connect?: formWhereUniqueInput | formWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type formUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput> | formCreateWithoutCompanyInput[] | formUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formCreateOrConnectWithoutCompanyInput | formCreateOrConnectWithoutCompanyInput[]
    createMany?: formCreateManyCompanyInputEnvelope
    connect?: formWhereUniqueInput | formWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type formUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput> | formCreateWithoutCompanyInput[] | formUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formCreateOrConnectWithoutCompanyInput | formCreateOrConnectWithoutCompanyInput[]
    upsert?: formUpsertWithWhereUniqueWithoutCompanyInput | formUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: formCreateManyCompanyInputEnvelope
    set?: formWhereUniqueInput | formWhereUniqueInput[]
    disconnect?: formWhereUniqueInput | formWhereUniqueInput[]
    delete?: formWhereUniqueInput | formWhereUniqueInput[]
    connect?: formWhereUniqueInput | formWhereUniqueInput[]
    update?: formUpdateWithWhereUniqueWithoutCompanyInput | formUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: formUpdateManyWithWhereWithoutCompanyInput | formUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: formScalarWhereInput | formScalarWhereInput[]
  }

  export type usersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutCompanyInput | usersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutCompanyInput | usersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutCompanyInput | usersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type formUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput> | formCreateWithoutCompanyInput[] | formUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formCreateOrConnectWithoutCompanyInput | formCreateOrConnectWithoutCompanyInput[]
    upsert?: formUpsertWithWhereUniqueWithoutCompanyInput | formUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: formCreateManyCompanyInputEnvelope
    set?: formWhereUniqueInput | formWhereUniqueInput[]
    disconnect?: formWhereUniqueInput | formWhereUniqueInput[]
    delete?: formWhereUniqueInput | formWhereUniqueInput[]
    connect?: formWhereUniqueInput | formWhereUniqueInput[]
    update?: formUpdateWithWhereUniqueWithoutCompanyInput | formUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: formUpdateManyWithWhereWithoutCompanyInput | formUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: formScalarWhereInput | formScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput> | usersCreateWithoutCompanyInput[] | usersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: usersCreateOrConnectWithoutCompanyInput | usersCreateOrConnectWithoutCompanyInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutCompanyInput | usersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: usersCreateManyCompanyInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutCompanyInput | usersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: usersUpdateManyWithWhereWithoutCompanyInput | usersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type answersCreateNestedManyWithoutFormInput = {
    create?: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput> | answersCreateWithoutFormInput[] | answersUncheckedCreateWithoutFormInput[]
    connectOrCreate?: answersCreateOrConnectWithoutFormInput | answersCreateOrConnectWithoutFormInput[]
    createMany?: answersCreateManyFormInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutFormInput = {
    create?: XOR<companyCreateWithoutFormInput, companyUncheckedCreateWithoutFormInput>
    connectOrCreate?: companyCreateOrConnectWithoutFormInput
    connect?: companyWhereUniqueInput
  }

  export type form_questionsCreateNestedManyWithoutFormInput = {
    create?: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput> | form_questionsCreateWithoutFormInput[] | form_questionsUncheckedCreateWithoutFormInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutFormInput | form_questionsCreateOrConnectWithoutFormInput[]
    createMany?: form_questionsCreateManyFormInputEnvelope
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
  }

  export type answersUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput> | answersCreateWithoutFormInput[] | answersUncheckedCreateWithoutFormInput[]
    connectOrCreate?: answersCreateOrConnectWithoutFormInput | answersCreateOrConnectWithoutFormInput[]
    createMany?: answersCreateManyFormInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type form_questionsUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput> | form_questionsCreateWithoutFormInput[] | form_questionsUncheckedCreateWithoutFormInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutFormInput | form_questionsCreateOrConnectWithoutFormInput[]
    createMany?: form_questionsCreateManyFormInputEnvelope
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
  }

  export type answersUpdateManyWithoutFormNestedInput = {
    create?: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput> | answersCreateWithoutFormInput[] | answersUncheckedCreateWithoutFormInput[]
    connectOrCreate?: answersCreateOrConnectWithoutFormInput | answersCreateOrConnectWithoutFormInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutFormInput | answersUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: answersCreateManyFormInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutFormInput | answersUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: answersUpdateManyWithWhereWithoutFormInput | answersUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type companyUpdateOneWithoutFormNestedInput = {
    create?: XOR<companyCreateWithoutFormInput, companyUncheckedCreateWithoutFormInput>
    connectOrCreate?: companyCreateOrConnectWithoutFormInput
    upsert?: companyUpsertWithoutFormInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutFormInput, companyUpdateWithoutFormInput>, companyUncheckedUpdateWithoutFormInput>
  }

  export type form_questionsUpdateManyWithoutFormNestedInput = {
    create?: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput> | form_questionsCreateWithoutFormInput[] | form_questionsUncheckedCreateWithoutFormInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutFormInput | form_questionsCreateOrConnectWithoutFormInput[]
    upsert?: form_questionsUpsertWithWhereUniqueWithoutFormInput | form_questionsUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: form_questionsCreateManyFormInputEnvelope
    set?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    disconnect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    delete?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    update?: form_questionsUpdateWithWhereUniqueWithoutFormInput | form_questionsUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: form_questionsUpdateManyWithWhereWithoutFormInput | form_questionsUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
  }

  export type answersUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput> | answersCreateWithoutFormInput[] | answersUncheckedCreateWithoutFormInput[]
    connectOrCreate?: answersCreateOrConnectWithoutFormInput | answersCreateOrConnectWithoutFormInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutFormInput | answersUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: answersCreateManyFormInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutFormInput | answersUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: answersUpdateManyWithWhereWithoutFormInput | answersUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type form_questionsUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput> | form_questionsCreateWithoutFormInput[] | form_questionsUncheckedCreateWithoutFormInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutFormInput | form_questionsCreateOrConnectWithoutFormInput[]
    upsert?: form_questionsUpsertWithWhereUniqueWithoutFormInput | form_questionsUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: form_questionsCreateManyFormInputEnvelope
    set?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    disconnect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    delete?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    update?: form_questionsUpdateWithWhereUniqueWithoutFormInput | form_questionsUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: form_questionsUpdateManyWithWhereWithoutFormInput | form_questionsUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
  }

  export type formCreateNestedOneWithoutForm_questionsInput = {
    create?: XOR<formCreateWithoutForm_questionsInput, formUncheckedCreateWithoutForm_questionsInput>
    connectOrCreate?: formCreateOrConnectWithoutForm_questionsInput
    connect?: formWhereUniqueInput
  }

  export type questionsCreateNestedOneWithoutForm_questionsInput = {
    create?: XOR<questionsCreateWithoutForm_questionsInput, questionsUncheckedCreateWithoutForm_questionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutForm_questionsInput
    connect?: questionsWhereUniqueInput
  }

  export type formUpdateOneWithoutForm_questionsNestedInput = {
    create?: XOR<formCreateWithoutForm_questionsInput, formUncheckedCreateWithoutForm_questionsInput>
    connectOrCreate?: formCreateOrConnectWithoutForm_questionsInput
    upsert?: formUpsertWithoutForm_questionsInput
    disconnect?: formWhereInput | boolean
    delete?: formWhereInput | boolean
    connect?: formWhereUniqueInput
    update?: XOR<XOR<formUpdateToOneWithWhereWithoutForm_questionsInput, formUpdateWithoutForm_questionsInput>, formUncheckedUpdateWithoutForm_questionsInput>
  }

  export type questionsUpdateOneWithoutForm_questionsNestedInput = {
    create?: XOR<questionsCreateWithoutForm_questionsInput, questionsUncheckedCreateWithoutForm_questionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutForm_questionsInput
    upsert?: questionsUpsertWithoutForm_questionsInput
    disconnect?: questionsWhereInput | boolean
    delete?: questionsWhereInput | boolean
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutForm_questionsInput, questionsUpdateWithoutForm_questionsInput>, questionsUncheckedUpdateWithoutForm_questionsInput>
  }

  export type form_questionsCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput> | form_questionsCreateWithoutQuestionsInput[] | form_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutQuestionsInput | form_questionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: form_questionsCreateManyQuestionsInputEnvelope
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
  }

  export type form_questionsUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput> | form_questionsCreateWithoutQuestionsInput[] | form_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutQuestionsInput | form_questionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: form_questionsCreateManyQuestionsInputEnvelope
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
  }

  export type form_questionsUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput> | form_questionsCreateWithoutQuestionsInput[] | form_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutQuestionsInput | form_questionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: form_questionsUpsertWithWhereUniqueWithoutQuestionsInput | form_questionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: form_questionsCreateManyQuestionsInputEnvelope
    set?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    disconnect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    delete?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    update?: form_questionsUpdateWithWhereUniqueWithoutQuestionsInput | form_questionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: form_questionsUpdateManyWithWhereWithoutQuestionsInput | form_questionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
  }

  export type form_questionsUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput> | form_questionsCreateWithoutQuestionsInput[] | form_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: form_questionsCreateOrConnectWithoutQuestionsInput | form_questionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: form_questionsUpsertWithWhereUniqueWithoutQuestionsInput | form_questionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: form_questionsCreateManyQuestionsInputEnvelope
    set?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    disconnect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    delete?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    connect?: form_questionsWhereUniqueInput | form_questionsWhereUniqueInput[]
    update?: form_questionsUpdateWithWhereUniqueWithoutQuestionsInput | form_questionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: form_questionsUpdateManyWithWhereWithoutQuestionsInput | form_questionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
  }

  export type answersCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutUsersInput = {
    create?: XOR<companyCreateWithoutUsersInput, companyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companyCreateOrConnectWithoutUsersInput
    connect?: companyWhereUniqueInput
  }

  export type work_regimeCreateNestedOneWithoutUsers_users_work_regimeTowork_regimeInput = {
    create?: XOR<work_regimeCreateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedCreateWithoutUsers_users_work_regimeTowork_regimeInput>
    connectOrCreate?: work_regimeCreateOrConnectWithoutUsers_users_work_regimeTowork_regimeInput
    connect?: work_regimeWhereUniqueInput
  }

  export type answersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type answersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type companyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<companyCreateWithoutUsersInput, companyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companyCreateOrConnectWithoutUsersInput
    upsert?: companyUpsertWithoutUsersInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutUsersInput, companyUpdateWithoutUsersInput>, companyUncheckedUpdateWithoutUsersInput>
  }

  export type work_regimeUpdateOneWithoutUsers_users_work_regimeTowork_regimeNestedInput = {
    create?: XOR<work_regimeCreateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedCreateWithoutUsers_users_work_regimeTowork_regimeInput>
    connectOrCreate?: work_regimeCreateOrConnectWithoutUsers_users_work_regimeTowork_regimeInput
    upsert?: work_regimeUpsertWithoutUsers_users_work_regimeTowork_regimeInput
    disconnect?: work_regimeWhereInput | boolean
    delete?: work_regimeWhereInput | boolean
    connect?: work_regimeWhereUniqueInput
    update?: XOR<XOR<work_regimeUpdateToOneWithWhereWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUpdateWithoutUsers_users_work_regimeTowork_regimeInput>, work_regimeUncheckedUpdateWithoutUsers_users_work_regimeTowork_regimeInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type answersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput> | answersCreateWithoutUsersInput[] | answersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: answersCreateOrConnectWithoutUsersInput | answersCreateOrConnectWithoutUsersInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutUsersInput | answersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: answersCreateManyUsersInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutUsersInput | answersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: answersUpdateManyWithWhereWithoutUsersInput | answersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    create?: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput> | usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[] | usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput | usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    createMany?: usersCreateManyWork_regime_users_work_regimeTowork_regimeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    create?: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput> | usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[] | usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput | usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    createMany?: usersCreateManyWork_regime_users_work_regimeTowork_regimeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeNestedInput = {
    create?: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput> | usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[] | usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput | usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpsertWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    createMany?: usersCreateManyWork_regime_users_work_regimeTowork_regimeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpdateWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpdateManyWithWhereWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUncheckedUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeNestedInput = {
    create?: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput> | usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[] | usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput | usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpsertWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    createMany?: usersCreateManyWork_regime_users_work_regimeTowork_regimeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpdateWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWork_regime_users_work_regimeTowork_regimeInput | usersUpdateManyWithWhereWithoutWork_regime_users_work_regimeTowork_regimeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type formCreateWithoutAnswersInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutFormInput
    form_questions?: form_questionsCreateNestedManyWithoutFormInput
  }

  export type formUncheckedCreateWithoutAnswersInput = {
    id?: string
    title?: string | null
    company_id?: string | null
    created_at?: Date | string | null
    form_questions?: form_questionsUncheckedCreateNestedManyWithoutFormInput
  }

  export type formCreateOrConnectWithoutAnswersInput = {
    where: formWhereUniqueInput
    create: XOR<formCreateWithoutAnswersInput, formUncheckedCreateWithoutAnswersInput>
  }

  export type usersCreateWithoutAnswersInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutUsersInput
    work_regime_users_work_regimeTowork_regime?: work_regimeCreateNestedOneWithoutUsers_users_work_regimeTowork_regimeInput
  }

  export type usersUncheckedCreateWithoutAnswersInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    companyId?: string | null
    work_regime?: number | null
    created_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutAnswersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
  }

  export type formUpsertWithoutAnswersInput = {
    update: XOR<formUpdateWithoutAnswersInput, formUncheckedUpdateWithoutAnswersInput>
    create: XOR<formCreateWithoutAnswersInput, formUncheckedCreateWithoutAnswersInput>
    where?: formWhereInput
  }

  export type formUpdateToOneWithWhereWithoutAnswersInput = {
    where?: formWhereInput
    data: XOR<formUpdateWithoutAnswersInput, formUncheckedUpdateWithoutAnswersInput>
  }

  export type formUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutFormNestedInput
    form_questions?: form_questionsUpdateManyWithoutFormNestedInput
  }

  export type formUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form_questions?: form_questionsUncheckedUpdateManyWithoutFormNestedInput
  }

  export type usersUpsertWithoutAnswersInput = {
    update: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAnswersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutUsersNestedInput
    work_regime_users_work_regimeTowork_regime?: work_regimeUpdateOneWithoutUsers_users_work_regimeTowork_regimeNestedInput
  }

  export type usersUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    work_regime?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type formCreateWithoutCompanyInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutFormInput
    form_questions?: form_questionsCreateNestedManyWithoutFormInput
  }

  export type formUncheckedCreateWithoutCompanyInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutFormInput
    form_questions?: form_questionsUncheckedCreateNestedManyWithoutFormInput
  }

  export type formCreateOrConnectWithoutCompanyInput = {
    where: formWhereUniqueInput
    create: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput>
  }

  export type formCreateManyCompanyInputEnvelope = {
    data: formCreateManyCompanyInput | formCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    work_regime_users_work_regimeTowork_regime?: work_regimeCreateNestedOneWithoutUsers_users_work_regimeTowork_regimeInput
  }

  export type usersUncheckedCreateWithoutCompanyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    work_regime?: number | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCompanyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput>
  }

  export type usersCreateManyCompanyInputEnvelope = {
    data: usersCreateManyCompanyInput | usersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type formUpsertWithWhereUniqueWithoutCompanyInput = {
    where: formWhereUniqueInput
    update: XOR<formUpdateWithoutCompanyInput, formUncheckedUpdateWithoutCompanyInput>
    create: XOR<formCreateWithoutCompanyInput, formUncheckedCreateWithoutCompanyInput>
  }

  export type formUpdateWithWhereUniqueWithoutCompanyInput = {
    where: formWhereUniqueInput
    data: XOR<formUpdateWithoutCompanyInput, formUncheckedUpdateWithoutCompanyInput>
  }

  export type formUpdateManyWithWhereWithoutCompanyInput = {
    where: formScalarWhereInput
    data: XOR<formUpdateManyMutationInput, formUncheckedUpdateManyWithoutCompanyInput>
  }

  export type formScalarWhereInput = {
    AND?: formScalarWhereInput | formScalarWhereInput[]
    OR?: formScalarWhereInput[]
    NOT?: formScalarWhereInput | formScalarWhereInput[]
    id?: UuidFilter<"form"> | string
    title?: StringNullableFilter<"form"> | string | null
    company_id?: UuidNullableFilter<"form"> | string | null
    created_at?: DateTimeNullableFilter<"form"> | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutCompanyInput, usersUncheckedUpdateWithoutCompanyInput>
    create: XOR<usersCreateWithoutCompanyInput, usersUncheckedCreateWithoutCompanyInput>
  }

  export type usersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutCompanyInput, usersUncheckedUpdateWithoutCompanyInput>
  }

  export type usersUpdateManyWithWhereWithoutCompanyInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    cpf?: StringNullableFilter<"users"> | string | null
    companyId?: UuidNullableFilter<"users"> | string | null
    work_regime?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type answersCreateWithoutFormInput = {
    id?: string
    send_date?: Date | string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutFormInput = {
    id?: string
    user_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutFormInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput>
  }

  export type answersCreateManyFormInputEnvelope = {
    data: answersCreateManyFormInput | answersCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutFormInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutFormInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutFormInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutFormInput, companyUncheckedCreateWithoutFormInput>
  }

  export type form_questionsCreateWithoutFormInput = {
    id?: string
    created_at?: Date | string | null
    questions?: questionsCreateNestedOneWithoutForm_questionsInput
  }

  export type form_questionsUncheckedCreateWithoutFormInput = {
    id?: string
    question_id?: string | null
    created_at?: Date | string | null
  }

  export type form_questionsCreateOrConnectWithoutFormInput = {
    where: form_questionsWhereUniqueInput
    create: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput>
  }

  export type form_questionsCreateManyFormInputEnvelope = {
    data: form_questionsCreateManyFormInput | form_questionsCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type answersUpsertWithWhereUniqueWithoutFormInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutFormInput, answersUncheckedUpdateWithoutFormInput>
    create: XOR<answersCreateWithoutFormInput, answersUncheckedCreateWithoutFormInput>
  }

  export type answersUpdateWithWhereUniqueWithoutFormInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutFormInput, answersUncheckedUpdateWithoutFormInput>
  }

  export type answersUpdateManyWithWhereWithoutFormInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutFormInput>
  }

  export type answersScalarWhereInput = {
    AND?: answersScalarWhereInput | answersScalarWhereInput[]
    OR?: answersScalarWhereInput[]
    NOT?: answersScalarWhereInput | answersScalarWhereInput[]
    id?: UuidFilter<"answers"> | string
    user_id?: UuidNullableFilter<"answers"> | string | null
    form_id?: UuidNullableFilter<"answers"> | string | null
    send_date?: DateTimeNullableFilter<"answers"> | Date | string | null
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
  }

  export type companyUpsertWithoutFormInput = {
    update: XOR<companyUpdateWithoutFormInput, companyUncheckedUpdateWithoutFormInput>
    create: XOR<companyCreateWithoutFormInput, companyUncheckedCreateWithoutFormInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutFormInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutFormInput, companyUncheckedUpdateWithoutFormInput>
  }

  export type companyUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type form_questionsUpsertWithWhereUniqueWithoutFormInput = {
    where: form_questionsWhereUniqueInput
    update: XOR<form_questionsUpdateWithoutFormInput, form_questionsUncheckedUpdateWithoutFormInput>
    create: XOR<form_questionsCreateWithoutFormInput, form_questionsUncheckedCreateWithoutFormInput>
  }

  export type form_questionsUpdateWithWhereUniqueWithoutFormInput = {
    where: form_questionsWhereUniqueInput
    data: XOR<form_questionsUpdateWithoutFormInput, form_questionsUncheckedUpdateWithoutFormInput>
  }

  export type form_questionsUpdateManyWithWhereWithoutFormInput = {
    where: form_questionsScalarWhereInput
    data: XOR<form_questionsUpdateManyMutationInput, form_questionsUncheckedUpdateManyWithoutFormInput>
  }

  export type form_questionsScalarWhereInput = {
    AND?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
    OR?: form_questionsScalarWhereInput[]
    NOT?: form_questionsScalarWhereInput | form_questionsScalarWhereInput[]
    id?: UuidFilter<"form_questions"> | string
    question_id?: UuidNullableFilter<"form_questions"> | string | null
    form_id?: UuidNullableFilter<"form_questions"> | string | null
    created_at?: DateTimeNullableFilter<"form_questions"> | Date | string | null
  }

  export type formCreateWithoutForm_questionsInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutFormInput
    company?: companyCreateNestedOneWithoutFormInput
  }

  export type formUncheckedCreateWithoutForm_questionsInput = {
    id?: string
    title?: string | null
    company_id?: string | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutFormInput
  }

  export type formCreateOrConnectWithoutForm_questionsInput = {
    where: formWhereUniqueInput
    create: XOR<formCreateWithoutForm_questionsInput, formUncheckedCreateWithoutForm_questionsInput>
  }

  export type questionsCreateWithoutForm_questionsInput = {
    id?: string
    question_text?: string | null
    type?: string | null
    created_at?: Date | string | null
  }

  export type questionsUncheckedCreateWithoutForm_questionsInput = {
    id?: string
    question_text?: string | null
    type?: string | null
    created_at?: Date | string | null
  }

  export type questionsCreateOrConnectWithoutForm_questionsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutForm_questionsInput, questionsUncheckedCreateWithoutForm_questionsInput>
  }

  export type formUpsertWithoutForm_questionsInput = {
    update: XOR<formUpdateWithoutForm_questionsInput, formUncheckedUpdateWithoutForm_questionsInput>
    create: XOR<formCreateWithoutForm_questionsInput, formUncheckedCreateWithoutForm_questionsInput>
    where?: formWhereInput
  }

  export type formUpdateToOneWithWhereWithoutForm_questionsInput = {
    where?: formWhereInput
    data: XOR<formUpdateWithoutForm_questionsInput, formUncheckedUpdateWithoutForm_questionsInput>
  }

  export type formUpdateWithoutForm_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutFormNestedInput
    company?: companyUpdateOneWithoutFormNestedInput
  }

  export type formUncheckedUpdateWithoutForm_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutFormNestedInput
  }

  export type questionsUpsertWithoutForm_questionsInput = {
    update: XOR<questionsUpdateWithoutForm_questionsInput, questionsUncheckedUpdateWithoutForm_questionsInput>
    create: XOR<questionsCreateWithoutForm_questionsInput, questionsUncheckedCreateWithoutForm_questionsInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutForm_questionsInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutForm_questionsInput, questionsUncheckedUpdateWithoutForm_questionsInput>
  }

  export type questionsUpdateWithoutForm_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUncheckedUpdateWithoutForm_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsCreateWithoutQuestionsInput = {
    id?: string
    created_at?: Date | string | null
    form?: formCreateNestedOneWithoutForm_questionsInput
  }

  export type form_questionsUncheckedCreateWithoutQuestionsInput = {
    id?: string
    form_id?: string | null
    created_at?: Date | string | null
  }

  export type form_questionsCreateOrConnectWithoutQuestionsInput = {
    where: form_questionsWhereUniqueInput
    create: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput>
  }

  export type form_questionsCreateManyQuestionsInputEnvelope = {
    data: form_questionsCreateManyQuestionsInput | form_questionsCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type form_questionsUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: form_questionsWhereUniqueInput
    update: XOR<form_questionsUpdateWithoutQuestionsInput, form_questionsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<form_questionsCreateWithoutQuestionsInput, form_questionsUncheckedCreateWithoutQuestionsInput>
  }

  export type form_questionsUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: form_questionsWhereUniqueInput
    data: XOR<form_questionsUpdateWithoutQuestionsInput, form_questionsUncheckedUpdateWithoutQuestionsInput>
  }

  export type form_questionsUpdateManyWithWhereWithoutQuestionsInput = {
    where: form_questionsScalarWhereInput
    data: XOR<form_questionsUpdateManyMutationInput, form_questionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type answersCreateWithoutUsersInput = {
    id?: string
    send_date?: Date | string | null
    created_at?: Date | string | null
    form?: formCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutUsersInput = {
    id?: string
    form_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutUsersInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersCreateManyUsersInputEnvelope = {
    data: answersCreateManyUsersInput | answersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    form?: formCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    cnpj?: string | null
    category?: string | null
    forms?: string | null
    created_at?: Date | string | null
    form?: formUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutUsersInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutUsersInput, companyUncheckedCreateWithoutUsersInput>
  }

  export type work_regimeCreateWithoutUsers_users_work_regimeTowork_regimeInput = {
    name?: string | null
    created_at?: Date | string | null
  }

  export type work_regimeUncheckedCreateWithoutUsers_users_work_regimeTowork_regimeInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
  }

  export type work_regimeCreateOrConnectWithoutUsers_users_work_regimeTowork_regimeInput = {
    where: work_regimeWhereUniqueInput
    create: XOR<work_regimeCreateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedCreateWithoutUsers_users_work_regimeTowork_regimeInput>
  }

  export type answersUpsertWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
    create: XOR<answersCreateWithoutUsersInput, answersUncheckedCreateWithoutUsersInput>
  }

  export type answersUpdateWithWhereUniqueWithoutUsersInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutUsersInput, answersUncheckedUpdateWithoutUsersInput>
  }

  export type answersUpdateManyWithWhereWithoutUsersInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutUsersInput>
  }

  export type companyUpsertWithoutUsersInput = {
    update: XOR<companyUpdateWithoutUsersInput, companyUncheckedUpdateWithoutUsersInput>
    create: XOR<companyCreateWithoutUsersInput, companyUncheckedCreateWithoutUsersInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutUsersInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutUsersInput, companyUncheckedUpdateWithoutUsersInput>
  }

  export type companyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    forms?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type work_regimeUpsertWithoutUsers_users_work_regimeTowork_regimeInput = {
    update: XOR<work_regimeUpdateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedUpdateWithoutUsers_users_work_regimeTowork_regimeInput>
    create: XOR<work_regimeCreateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedCreateWithoutUsers_users_work_regimeTowork_regimeInput>
    where?: work_regimeWhereInput
  }

  export type work_regimeUpdateToOneWithWhereWithoutUsers_users_work_regimeTowork_regimeInput = {
    where?: work_regimeWhereInput
    data: XOR<work_regimeUpdateWithoutUsers_users_work_regimeTowork_regimeInput, work_regimeUncheckedUpdateWithoutUsers_users_work_regimeTowork_regimeInput>
  }

  export type work_regimeUpdateWithoutUsers_users_work_regimeTowork_regimeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type work_regimeUncheckedUpdateWithoutUsers_users_work_regimeTowork_regimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    created_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutUsersInput
    company?: companyCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    companyId?: string | null
    created_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput>
  }

  export type usersCreateManyWork_regime_users_work_regimeTowork_regimeInputEnvelope = {
    data: usersCreateManyWork_regime_users_work_regimeTowork_regimeInput | usersCreateManyWork_regime_users_work_regimeTowork_regimeInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput>
    create: XOR<usersCreateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedCreateWithoutWork_regime_users_work_regimeTowork_regimeInput>
  }

  export type usersUpdateWithWhereUniqueWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput, usersUncheckedUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput>
  }

  export type usersUpdateManyWithWhereWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeInput>
  }

  export type formCreateManyCompanyInput = {
    id?: string
    title?: string | null
    created_at?: Date | string | null
  }

  export type usersCreateManyCompanyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    work_regime?: number | null
    created_at?: Date | string | null
  }

  export type formUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutFormNestedInput
    form_questions?: form_questionsUpdateManyWithoutFormNestedInput
  }

  export type formUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutFormNestedInput
    form_questions?: form_questionsUncheckedUpdateManyWithoutFormNestedInput
  }

  export type formUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    work_regime_users_work_regimeTowork_regime?: work_regimeUpdateOneWithoutUsers_users_work_regimeTowork_regimeNestedInput
  }

  export type usersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    work_regime?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    work_regime?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyFormInput = {
    id?: string
    user_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type form_questionsCreateManyFormInput = {
    id?: string
    question_id?: string | null
    created_at?: Date | string | null
  }

  export type answersUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneWithoutForm_questionsNestedInput
  }

  export type form_questionsUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsCreateManyQuestionsInput = {
    id?: string
    form_id?: string | null
    created_at?: Date | string | null
  }

  export type form_questionsUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateOneWithoutForm_questionsNestedInput
  }

  export type form_questionsUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type form_questionsUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyUsersInput = {
    id?: string
    form_id?: string | null
    send_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type answersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: formUpdateOneWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    form_id?: NullableStringFieldUpdateOperationsInput | string | null
    send_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyWork_regime_users_work_regimeTowork_regimeInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    cpf?: string | null
    companyId?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutUsersNestedInput
    company?: companyUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutWork_regime_users_work_regimeTowork_regimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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