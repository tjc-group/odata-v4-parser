import * as Lexer from './lexer';
export declare function enumeration(value: number[], index: number): Lexer.Token;
export declare function enumValue(value: number[], index: number): Lexer.Token;
export declare function singleEnumValue(value: number[], index: number): Lexer.Token;
export declare function enumMemberValue(value: number[], index: number): Lexer.Token;
export declare function singleQualifiedTypeName(value: number[], index: number): Lexer.Token;
export declare function qualifiedTypeName(value: number[], index: number): Lexer.Token;
export declare function qualifiedEntityTypeName(value: number[], index: number): Lexer.Token;
export declare function qualifiedComplexTypeName(value: number[], index: number): Lexer.Token;
export declare function qualifiedTypeDefinitionName(value: number[], index: number): Lexer.Token;
export declare function qualifiedEnumTypeName(value: number[], index: number): Lexer.Token;
export declare function namespace(value: number[], index: number): number;
export declare function odataIdentifier(value: number[], index: number, tokenType?: Lexer.TokenType): Lexer.Token;
export declare function namespacePart(value: number[], index: number): Lexer.Token;
export declare function entitySetName(value: number[], index: number): Lexer.Token;
export declare function singletonEntity(value: number[], index: number): Lexer.Token;
export declare function entityTypeName(value: number[], index: number): Lexer.Token;
export declare function complexTypeName(value: number[], index: number): Lexer.Token;
export declare function typeDefinitionName(value: number[], index: number): Lexer.Token;
export declare function enumerationTypeName(value: number[], index: number): Lexer.Token;
export declare function enumerationMember(value: number[], index: number): Lexer.Token;
export declare function termName(value: number[], index: number): Lexer.Token;
export declare function primitiveTypeName(value: number[], index: number): Lexer.Token;
export declare function primitiveProperty(value: number[], index: number): Lexer.Token;
export declare function primitiveKeyProperty(value: number[], index: number): Lexer.Token;
export declare function primitiveNonKeyProperty(value: number[], index: number): Lexer.Token;
export declare function primitiveColProperty(value: number[], index: number): Lexer.Token;
export declare function complexProperty(value: number[], index: number): Lexer.Token;
export declare function complexColProperty(value: number[], index: number): Lexer.Token;
export declare function streamProperty(value: number[], index: number): Lexer.Token;
export declare function navigationProperty(value: number[], index: number): Lexer.Token;
export declare function entityNavigationProperty(value: number[], index: number): Lexer.Token;
export declare function entityColNavigationProperty(value: number[], index: number): Lexer.Token;
export declare function action(value: number[], index: number): Lexer.Token;
export declare function actionImport(value: number[], index: number): Lexer.Token;
export declare function odataFunction(value: number[], index: number): Lexer.Token;
export declare function entityFunction(value: number[], index: number): Lexer.Token;
export declare function entityColFunction(value: number[], index: number): Lexer.Token;
export declare function complexFunction(value: number[], index: number): Lexer.Token;
export declare function complexColFunction(value: number[], index: number): Lexer.Token;
export declare function primitiveFunction(value: number[], index: number): Lexer.Token;
export declare function primitiveColFunction(value: number[], index: number): Lexer.Token;
export declare function entityFunctionImport(value: number[], index: number): Lexer.Token;
export declare function entityColFunctionImport(value: number[], index: number): Lexer.Token;
export declare function complexFunctionImport(value: number[], index: number): Lexer.Token;
export declare function complexColFunctionImport(value: number[], index: number): Lexer.Token;
export declare function primitiveFunctionImport(value: number[], index: number): Lexer.Token;
export declare function primitiveColFunctionImport(value: number[], index: number): Lexer.Token;
