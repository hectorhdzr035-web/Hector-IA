import {describe,expect,it} from 'vitest';
import {authorizationServerMetadata} from '../worker/lib/mcp-oauth';

describe('MCP OAuth renewable access',()=>{
  it('advertises PKCE authorization codes and rotating refresh tokens',()=>{
    const metadata=authorizationServerMetadata('https://hector.example/mcp');
    expect(metadata.code_challenge_methods_supported).toEqual(['S256']);
    expect(metadata.grant_types_supported).toEqual(['authorization_code','refresh_token']);
    expect(metadata.token_endpoint_auth_methods_supported).toEqual(['none']);
  });
});
