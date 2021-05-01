const yes = extendContent(UnitType, "red-boat", {});

yes.constructor = () => extend(UnitWaterMove, {});

Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(yes, 1, ItemStack.with(Items.thorium, 1)));


const a = extendContent(UnitType, "the-dad", {});
a.constructor = () => extend(UnitWaterMove, {});
a.immunities.add(StatusEffects.corroded);

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "red-boat-red-boat"), Vars.content.getByName(ContentType.unit, "red-boat-the-dad")]);
Blocks.tetrativeReconstructor.upgrades.add(upgrade.toArray(UnitType));
