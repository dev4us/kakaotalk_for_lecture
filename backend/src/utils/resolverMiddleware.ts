const privateResolver = resolverFunction => async (
  parent,
  args,
  context,
  info
) => {
  if (!context.req.user) {
    throw new Error("로그인이 필요합니다.");
  }
  const resolverd = await resolverFunction(parent, args, context, info);
  return resolverd;
};

export default privateResolver;
