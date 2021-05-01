const yes = extendContent(UnitType, "red-boat", {});

yes.constructor = () => extend(UnitWaterMove, {});

Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(yes, 1, ItemStack.with(Items.thorium, 1)));
